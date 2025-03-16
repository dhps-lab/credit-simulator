import { Module } from '@nestjs/common';
import { CustomersService } from './services/customers/customers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from './schemas/customer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
  ],
  providers: [CustomersService],
  exports: [CustomersService],
})
export class CustomersModule {}
