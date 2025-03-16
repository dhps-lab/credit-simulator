export class Simulation {
  constructor(
    public amount: number,
    public months: string,
    public insurance_amount: number,
    public base_payment?: number,
    public date: Date = new Date(),
  ) {}
}

export class Offer {
  amount: number;
  state: string;
}

export class Customer {
  _id: string;
  name: string;
  credit_profile: string;
  borrowing_capacity: number;
  birthdate: Date;
  dni: string;
  simulations: Simulation[] = [];
  offers: Offer[] = [];
}
