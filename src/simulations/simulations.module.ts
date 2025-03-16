import { Module } from '@nestjs/common';
import { SimulationsController } from './controllers/simulations/simulations.controller';
import { SimulationsService } from './services/simulations/simulations.service';
import { CustomersModule } from 'src/customers/customers.module';

@Module({
  imports: [CustomersModule],
  controllers: [SimulationsController],
  providers: [SimulationsService],
})
export class SimulationsModule {}
