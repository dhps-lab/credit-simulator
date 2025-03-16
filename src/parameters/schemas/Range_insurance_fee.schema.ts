import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RangeInsuranceFeeDocument = HydratedDocument<RangeInsuranceFee>;

@Schema()
export class RangeInsuranceFee {
  @Prop()
  min_age: number;
  @Prop()
  max_age: number;
  @Prop()
  percentage: number;
}

export const RangeInsuranceFeeSchema =
  SchemaFactory.createForClass(RangeInsuranceFee);
