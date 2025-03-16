import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Customer } from '../../entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel('Customer') private customerModel: Model<Customer>,
  ) {}

  async findById(id: string): Promise<Customer> {
    const customer = await this.customerModel.findById(id).exec();
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    return customer;
  }

  async findByDni(dni: string): Promise<Customer> {
    const customer = await this.customerModel.findOne({ dni }).exec();
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    return customer;
  }
}
