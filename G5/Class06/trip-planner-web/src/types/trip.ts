export enum Status {
  PLANNING = "PLANNING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export enum Currency {
  MKD = "MKD",
  EUR = "EUR",
  USD = "USD",
}

export interface Budget {
  id: string;
  currency: Currency;
  amount: number;
}

export interface Trip {
  id: string;
  destination: string;
  notes: string;
  status: Status;
  startDate: number;
  endDate: number;
  createdAt: number;
  updatedAt: number | null;
  imageUrl: string;
  budget: Budget;
}

// USED FOR CREATING TRIP
export interface TripCreationProps {
  budget: {
    currency: Currency;
    amount: number;
  };
  destination: string;
  status: Status;
  notes: string;
  startDate: number;
  endDate: number;
  imageUrl: string;
}

// USED FOR THE STATE PROPS IN ADD-TRIP
export type DraftTrip = {
  currency: Currency;
  amount: string;
  destination: string;
  status: Status;
  notes: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
};
