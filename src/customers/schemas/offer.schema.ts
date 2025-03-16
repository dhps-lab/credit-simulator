import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OfferDocument = HydratedDocument<Offer>;

@Schema()
export class Offer {
  @Prop()
  amount: number;
  @Prop()
  state: string;
}

export const OfferSchema = SchemaFactory.createForClass(Offer);
