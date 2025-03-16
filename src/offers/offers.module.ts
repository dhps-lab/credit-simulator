import { Module } from '@nestjs/common';
import { OffersController } from './controllers/offers/offers.controller';
import { CustomersModule } from '../customers/customers.module';
import { OffersService } from './services/offers/offers.service';
import { ParametersModule } from 'src/parameters/parameters.module';

@Module({
  imports: [CustomersModule, ParametersModule],
  controllers: [OffersController],
  providers: [OffersService],
})
export class OffersModule {}
