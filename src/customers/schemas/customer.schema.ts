import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
