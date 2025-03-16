import { Body, Controller, Post } from '@nestjs/common';
import { CreateSimulationDto } from 'src/simulations/dtos/simulations.dtos';
import { SimulationsService } from 'src/simulations/services/simulations/simulations.service';

@Controller('simulations')
export class SimulationsController {
  constructor(private simulationsService: SimulationsService) {}

  @Post()
  simulatesCredit(@Body() payload: CreateSimulationDto) {
    const { customerId, amount, time } = payload;
    return this.simulationsService.simulatesCredit(customerId, amount, time);
  }
}
