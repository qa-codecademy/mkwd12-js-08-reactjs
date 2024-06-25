import { Injectable, HttpException, NotFoundException } from '@nestjs/common';
import {
  Budget,
  Trip,
  TripCreationProps,
  UpdateTripProps,
} from './entity/trip/trip.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { TripORMEntity } from './entity/trip/trip.entity';
import { Repository } from 'typeorm';
import { BudgetORMEntity } from 'src/budget/entity/budget.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TripService {
  constructor(
    @InjectRepository(TripORMEntity)
    private tripRepository: Repository<TripORMEntity>,

    @InjectRepository(BudgetORMEntity)
    private budgetRepository: Repository<BudgetORMEntity>,

    private userService: UsersService,
  ) {}

  async getTrips(userID?: number) {
    const trips = await this.tripRepository.find({
      relations: ['budget'],
      where: { user: { id: userID } },
    });

    return trips;
  }

  async createTrip(tripCreationProps: TripCreationProps, userID?: number) {
    const budgetProps: Budget = {
      amount: tripCreationProps.budget.amount,
      currency: tripCreationProps.budget.currency,
    };

    const budgetEntity = this.budgetRepository.create(budgetProps);
    await this.budgetRepository.save(budgetEntity);

    // 2. Create the trip
    const trip: Trip = {
      destination: tripCreationProps.destination,
      status: tripCreationProps.status,
      notes: tripCreationProps.notes,
      startDate: tripCreationProps.startDate,
      endDate: tripCreationProps.endDate,
      createdAt: new Date().getTime(),
      updatedAt: null,
      imageUrl: tripCreationProps.imageUrl,
    };

    const user = await this.userService.findOneByID(userID);

    const tripEntity = this.tripRepository.create({
      ...trip,
      budget: budgetEntity,
      user: user,
    });

    await this.tripRepository.save(tripEntity);

    return tripEntity.id;
  }

  async getTrip(id: string) {
    const trip = await this.tripRepository.findOne({
      where: { id: id }, // trip.id === id
      relations: ['budget'],
    });

    if (!trip) {
      throw new HttpException(`Trip with id: ${id} is not found`, 404);
    }

    return trip;
  }

  async removeTrip(id: string) {
    const trip = await this.getTrip(id);
    const budgetID = trip.budget.id;

    await this.budgetRepository.delete({ id: budgetID });
    const response = await this.tripRepository.delete({ id: id });

    if (!response.affected) {
      throw new NotFoundException(`Trip with id: ${id} was not found.`);
    }
  }

  async updateTrip(id: string, updateTripProps: UpdateTripProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { budget, ...rest } = updateTripProps;

    // TODO: SET updatedAt
    const response = await this.tripRepository.update(
      { id: id },
      { ...rest, updatedAt: new Date().getTime() },
    );

    if (!response.affected) {
      throw new NotFoundException(`Trip with id: ${id} was not found.`);
    }
  }
}
