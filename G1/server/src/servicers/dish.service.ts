import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Dish } from '../entities/dish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DishQueryDto } from '../dtos/dish-query.dto';
import { DishResponseDto } from '../dtos/dish-response.dto';
import { Category } from '../common/types/categories.enum';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish) private readonly dishRepository: Repository<Dish>,
  ) {}

  async getDishes({
    name,
    category,
    sortBy,
    sortDirection,
    page,
    pageSize,
  }: DishQueryDto): Promise<DishResponseDto> {
    const query = this.dishRepository
      .createQueryBuilder('dish')
      .leftJoinAndSelect('dish.orders', 'order')
      .loadRelationCountAndMap('dish.order_count', 'dish.orders')
      .select([
        'dish.id',
        'dish.name',
        'dish.price',
        'dish.image',
        'dish.description',
        'dish.discountPercentage',
        'dish.createdAt',
        'dish.category',
      ])
      .addSelect('COUNT(order.id)', 'order_count');

    if (name) {
      query.where('dish.name ILIKE :name', { name: `%${name}%` });
    }

    if (category) {
      query.andWhere('dish.category = :category', {
        category,
      });
    }

    query.groupBy('dish.id');

    if (sortBy && sortDirection) {
      if (sortBy === 'createdAt') {
        query.orderBy('dish.createdAt', sortDirection);
      }

      if (sortBy === 'orders') {
        query.orderBy('order_count', sortDirection);
      }
    }

    const [dishes, total] = await query
      .take(pageSize)
      .skip((page - 1) * pageSize)
      .getManyAndCount();

    return { payload: dishes, total };
  }

  async populateDishes(): Promise<any> {
    // cleanup the database table Dish
    await this.dishRepository.createQueryBuilder('dish').delete().execute();

    // insert the dishes into the database
    return this.dishRepository
      .createQueryBuilder()
      .insert()
      .into(Dish)
      .values([
        {
          name: 'Margherita',
          description: 'Classic pizza with tomato sauce, mozzarella, and basil',
          image: '/images/margherita.jpg',
          price: 9.99,
          discountPercentage: 10,
          category: Category.Pizza,
          createdAt: '2022-09-08T10:15:00.000Z',
        },
        {
          name: 'Pepperoni',
          description: 'Pepperoni, mozzarella, and tomato sauce',
          image: '/images/pepperoni.jpg',
          price: 11.99,
          discountPercentage: 0,
          category: Category.Pizza,
          createdAt: '2023-01-15T14:30:00.000Z',
        },
        {
          name: 'Hawaiian',
          description: 'Ham, pineapple, mozzarella, and tomato sauce',
          image: '/images/hawaiian.jpg',
          price: 12.99,
          discountPercentage: 20,
          category: Category.Pizza,
          createdAt: '2021-06-12T08:45:00.000Z',
        },
        {
          name: 'Cheeseburger',
          description:
            'Beef patty, cheddar cheese, lettuce, tomato, and pickles',
          image: '/images/cheeseburger.jpg',
          price: 8.99,
          discountPercentage: 0,
          category: Category.Burgers,
          createdAt: '2022-11-19T17:30:00.000Z',
        },
        {
          name: 'Bacon Burger',
          description: 'Beef patty, bacon, cheddar cheese, lettuce, and tomato',
          image: '/images/bacon-burger.jpg',
          price: 10.99,
          discountPercentage: 10,
          category: Category.Burgers,
          createdAt: '2022-05-22T12:00:00.000Z',
        },
        {
          name: 'Veggie Burger',
          description: 'Vegetable patty, lettuce, tomato, and avocado',
          image: '/images/veggie-burger.jpg',
          price: 9.99,
          discountPercentage: 15,
          category: Category.Burgers,
          createdAt: '2023-04-30T15:15:00.000Z',
        },
        {
          name: 'Spaghetti Carbonara',
          description: 'Spaghetti with pancetta, egg, and Parmesan cheese',
          image: '/images/spaghetti-carbonara.jpg',
          price: 13.99,
          discountPercentage: 10,
          category: Category.Pasta,
          createdAt: '2021-08-03T11:00:00.000Z',
        },
        {
          name: 'Lasagna',
          description:
            'Layers of pasta with meat sauce, ricotta, and mozzarella',
          image: '/images/lasagna.jpg',
          price: 14.99,
          discountPercentage: 0,
          category: Category.Pasta,
          createdAt: '2023-02-20T09:45:00.000Z',
        },
        {
          name: 'Penne Arrabbiata',
          description: 'Penne pasta with spicy tomato sauce',
          image: '/images/penne-arrabbiata.jpg',
          price: 12.99,
          discountPercentage: 15,
          category: Category.Pasta,
          createdAt: '2022-07-14T14:30:00.000Z',
        },
        {
          name: 'Moussaka',
          description: 'Layers of eggplant, minced meat, and béchamel sauce',
          image: '/images/moussaka.jpg',
          price: 15.99,
          discountPercentage: 20,
          category: Category.Traditional,
          createdAt: '2021-03-11T13:15:00.000Z',
        },
        {
          name: 'Paella',
          description: 'Spanish rice dish with seafood and saffron',
          image: '/images/paella.jpg',
          price: 16.99,
          discountPercentage: 10,
          category: Category.Traditional,
          createdAt: '2022-12-05T10:00:00.000Z',
        },
        {
          name: 'Borscht',
          description: 'Beet soup with sour cream',
          image: '/images/borscht.jpg',
          price: 8.99,
          discountPercentage: 15,
          category: Category.Traditional,
          createdAt: '2023-06-08T16:45:00.000Z',
        },
        {
          name: 'Nigiri',
          description: 'Slices of fish over pressed vinegared rice',
          image: '/images/nigiri.jpg',
          price: 11.99,
          discountPercentage: 10,
          category: Category.Sushi,
          createdAt: '2021-09-25T07:30:00.000Z',
        },
        {
          name: 'Sashimi',
          description: 'Thinly sliced raw fish',
          image: '/images/sashimi.jpg',
          price: 12.99,
          discountPercentage: 5,
          category: Category.Sushi,
          createdAt: '2022-10-17T13:00:00.000Z',
        },
        {
          name: 'Maki Roll',
          description: 'Rice and seafood rolled in seaweed',
          image: '/images/maki-roll.jpg',
          price: 11.99,
          discountPercentage: 15,
          category: Category.Sushi,
          createdAt: '2023-05-01T09:15:00.000Z',
        },
        {
          name: 'Quattro Formaggi',
          description:
            'Four cheese pizza with mozzarella, gorgonzola, parmesan, and ricotta',
          image: '/images/quattro-formaggi.jpg',
          price: 13.99,
          discountPercentage: 12,
          category: Category.Pizza,
          createdAt: '2022-08-19T11:45:00.000Z',
        },
        {
          name: 'BBQ Chicken Pizza',
          description: 'BBQ sauce, chicken, red onions, and cilantro',
          image: '/images/bbq-chicken-pizza.jpg',
          price: 14.99,
          discountPercentage: 18,
          category: Category.Pizza,
          createdAt: '2023-03-04T14:00:00.000Z',
        },
        {
          name: 'Supreme Pizza',
          description:
            'Pepperoni, sausage, bell peppers, onions, and mushrooms',
          image: '/images/supreme-pizza.jpg',
          price: 15.99,
          discountPercentage: 15,
          category: Category.Pizza,
          createdAt: '2021-05-15T12:30:00.000Z',
        },
        {
          name: 'Veggie Pizza',
          description: 'Tomatoes, olives, bell peppers, onions, and mushrooms',
          image: '/images/veggie-pizza.jpg',
          price: 12.99,
          discountPercentage: 20,
          category: Category.Pizza,
          createdAt: '2022-11-01T09:45:00.000Z',
        },
        {
          name: 'Mushroom Burger',
          description:
            'Beef patty, sautéed mushrooms, Swiss cheese, and garlic aioli',
          image: '/images/mushroom-burger.jpg',
          price: 10.99,
          discountPercentage: 10,
          category: Category.Burgers,
          createdAt: '2023-02-22T11:30:00.000Z',
        },
        {
          name: 'Double Cheeseburger',
          description: 'Two beef patties, cheddar cheese, lettuce, and tomato',
          image: '/images/double-cheeseburger.jpg',
          price: 12.99,
          discountPercentage: 15,
          category: Category.Burgers,
          createdAt: '2021-07-09T15:00:00.000Z',
        },
        {
          name: 'Spaghetti Bolognese',
          description: 'Spaghetti with a rich meat sauce',
          image: '/images/spaghetti-bolognese.jpg',
          price: 14.99,
          discountPercentage: 10,
          category: Category.Pasta,
          createdAt: '2022-06-18T16:15:00.000Z',
        },
        {
          name: 'Fettuccine Alfredo',
          description: 'Fettuccine pasta with creamy Alfredo sauce',
          image: '/images/fettuccine-alfredo.jpg',
          price: 13.99,
          discountPercentage: 12,
          category: Category.Pasta,
          createdAt: '2023-01-28T10:30:00.000Z',
        },
        {
          name: 'Pad Thai',
          description: 'Stir-fried rice noodles with shrimp, tofu, and peanuts',
          image: '/images/pad-thai.jpg',
          price: 12.99,
          discountPercentage: 15,
          category: Category.Traditional,
          createdAt: '2022-10-05T14:00:00.000Z',
        },
        {
          name: 'Chicken Curry',
          description: 'Spicy chicken curry with rice',
          image: '/images/chicken-curry.jpg',
          price: 14.99,
          discountPercentage: 20,
          category: Category.Traditional,
          createdAt: '2021-08-21T13:45:00.000Z',
        },
        {
          name: 'California Roll',
          description: 'Crab, avocado, and cucumber rolled in seaweed',
          image: '/images/california-roll.jpg',
          price: 10.99,
          discountPercentage: 10,
          category: Category.Sushi,
          createdAt: '2023-03-15T12:15:00.000Z',
        },
        {
          name: 'Dragon Roll',
          description:
            'Shrimp tempura and cucumber topped with avocado and eel sauce',
          image: '/images/dragon-roll.jpg',
          price: 13.99,
          discountPercentage: 5,
          category: Category.Sushi,
          createdAt: '2022-07-30T11:30:00.000Z',
        },
        {
          name: 'Spicy Tuna Roll',
          description: 'Spicy tuna and cucumber rolled in seaweed',
          image: '/images/spicy-tuna-roll.jpg',
          price: 11.99,
          discountPercentage: 15,
          category: Category.Sushi,
          createdAt: '2021-04-18T15:15:00.000Z',
        },
        {
          name: 'Ramen',
          description: 'Japanese noodle soup with pork and vegetables',
          image: '/images/ramen.jpg',
          price: 12.99,
          discountPercentage: 20,
          category: Category.Traditional,
          createdAt: '2022-09-23T10:30:00.000Z',
        },
        {
          name: 'Salmon Sashimi',
          description: 'Thinly sliced raw salmon',
          image: '/images/salmon-sashimi.jpg',
          price: 14.99,
          discountPercentage: 10,
          category: Category.Sushi,
          createdAt: '2023-05-11T09:00:00.000Z',
        },
      ])
      .execute();
  }
}
