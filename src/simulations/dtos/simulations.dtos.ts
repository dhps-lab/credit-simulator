import { IsIn, IsNumber, IsNumberString, IsPositive } from 'class-validator';

export class CreateSimulationDto {
  @IsNumberString()
  readonly customerId: string;

  @IsNumber()
  @IsPositive()
  readonly amount: number;

  @IsNumber()
  @IsPositive()
  @IsIn([])
  readonly time: number;
}
