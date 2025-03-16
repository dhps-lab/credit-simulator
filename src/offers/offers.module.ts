import { Module } from '@nestjs/common';
import { OffersController } from './controllers/offers/offers.controller';

@Module({
  controllers: [OffersController],
})
export class OffersModule {}
