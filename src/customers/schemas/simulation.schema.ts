import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SimulationDocument = HydratedDocument<Simulation>;

@Schema()
export class Simulation {
  @Prop()
  amount: number;
  @Prop()
  term: string;
  @Prop()
  basePayment: number;
  @Prop({ default: Date.now })
  date: Date;
}

export const SimulationSchema = SchemaFactory.createForClass(Simulation);
