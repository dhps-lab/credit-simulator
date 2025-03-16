import { IsNumber, IsNumberString } from 'class-validator';

export class CreateSimulationDto {
  @IsNumberString()
  readonly customerId: string;

  @IsNumber()
  readonly amount: number;

  @IsNumber()
  readonly time: number;
}
