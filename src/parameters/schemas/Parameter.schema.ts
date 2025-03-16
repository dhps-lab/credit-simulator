import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { RangeInsuranceFee } from './Range_insurance_fee.schema';
import { CreditProfile } from './creditProfile.schema';

export type ParameterDocument = HydratedDocument<Parameter>;

@Schema()
export class Parameter {
  @Prop()
  offer_states: string[];

  @Prop()
  credit_profiles: [CreditProfile];

  @Prop()
  terms: number[];

  @Prop()
  ranges_insurance_fee: RangeInsuranceFee[];
}

export const ParameterSchema = SchemaFactory.createForClass(Parameter);
