import { Body, Controller, Post } from '@nestjs/common';
import { CreateSimulationDto } from './../../dtos/simulations.dtos';
import { SimulationsService } from './../../services/simulations/simulations.service';

@Controller('simulations')
export class SimulationsController {
  constructor(private simulationsService: SimulationsService) {}

  @Post()
  simulatesCredit(@Body() payload: CreateSimulationDto) {
    const { customerId, amount, time } = payload;
    return this.simulationsService.simulatesCredit(customerId, amount, time);
  }
}
