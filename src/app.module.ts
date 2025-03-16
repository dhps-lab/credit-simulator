import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { OffersModule } from './offers/offers.module';
import { SimulationsModule } from './simulations/simulations.module';
import { ParametersModule } from './parameters/parameters.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || ''),
    CustomersModule,
    OffersModule,
    SimulationsModule,
    ParametersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
