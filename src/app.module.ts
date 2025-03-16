import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { OffersModule } from './offers/offers.module';
import { SimulationsModule } from './simulations/simulations.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || ''),
    CustomersModule,
    OffersModule,
    SimulationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
