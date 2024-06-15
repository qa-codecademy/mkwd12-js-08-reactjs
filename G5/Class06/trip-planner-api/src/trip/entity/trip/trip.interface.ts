export enum Currency {
  MKD = 'MKD',
  EUR = 'EUR',
  USD = 'USD',
  GBP = 'GBP',
}

export enum Status {
  PLANNING = 'PLANNING',
  BOOKED = 'BOOKED',
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}
export interface Budget {
  amount: number;
  currency: Currency;
}

export interface Trip {
  destination: string;
  notes: string;
  status: Status;
  startDate: number;
  endDate: number;
  createdAt: number;
  updatedAt: number | null;
  imageUrl: string;
}

export interface TripCreationProps {
  budget: Budget;
  destination: string;
  notes: string;
  status: Status;
  startDate: number;
  endDate: number;
  imageUrl: string;
}

export type UpdateTripProps = Partial<TripCreationProps>;

export type TripToUpdate = Partial<Trip>;
