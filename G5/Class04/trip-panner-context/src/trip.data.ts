type TripStatus = "PLANNING" | "COMPLETED";

export interface Trip {
  id: number;
  title: string;
  destination: string;
  status: TripStatus;
  budget: number;
  image: string;
}

export const trips: Trip[] = [
  {
    id: 1,
    title: "Visit London",
    destination: "London, England",
    status: "PLANNING",
    budget: 4000,
    image:
      "https://babylontours.com/wp-content/uploads/2016/09/london-441853_960_720.jpg",
  },
  {
    id: 2,
    title: "Barcelona",
    destination: "Barcelona, Spain, Madrid",
    status: "PLANNING",
    budget: 5000,
    image:
      "https://earth.esa.int/web/earth-watching/content/documents/257246/1608677/Barcelona.jpg",
  },
  {
    id: 3,
    title: "Greece Holiday",
    destination: "Leptokaria",
    status: "PLANNING",
    budget: 3500,
    image: "https://s1.feelgreece.com/cx/m/0/0/1038/149531-viewos.jpg",
  },
];
