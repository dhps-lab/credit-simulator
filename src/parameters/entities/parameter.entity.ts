export class Interest_rate {
  min_amount: number;
  max_amount?: number;
  value: number;
}

export class Credit_profile {
  name: string;
  interest_rate: Interest_rate[];
}

export class Range_insurance_fee {
  min_age: number;
  max_age: number;
  percentage: number;
}

export class Parameter {
  offer_states: string[];
  terms: number[];
  credit_profiles: Credit_profile[];
  ranges_insurance_fee: Range_insurance_fee[];
}
