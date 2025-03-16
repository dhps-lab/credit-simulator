import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Simulation } from './simulation.schema';
import { Offer } from './offer.schema';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop()
  name: string;

  @Prop()
  credit_profile: string;

  @Prop()
  borrowing_capacity: number;

  @Prop()
  birthdate: Date;

  @Prop()
  dni: string;

  @Prop()
  simulations: [Simulation];

  @Prop()
  offers: [Offer];
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
