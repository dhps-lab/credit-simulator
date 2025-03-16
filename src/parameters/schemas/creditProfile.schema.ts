import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type InterestRateDocument = HydratedDocument<InterestRate>;

@Schema()
export class InterestRate {
  @Prop()
  min_amount: number;
  @Prop()
  max_amount?: number;
  @Prop()
  value: number;
}

export const InterestRateSchema = SchemaFactory.createForClass(InterestRate);

export type CreditProfileDocument = HydratedDocument<CreditProfile>;

@Schema()
export class CreditProfile {
  @Prop()
  name: string;
  @Prop()
  interestRate: [InterestRate];
}

export const CreditProfileSchema = SchemaFactory.createForClass(CreditProfile);
