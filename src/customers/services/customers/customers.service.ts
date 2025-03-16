import { Simulation } from './../../entities/customer.entity';
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
      throw new NotFoundException('Cliente no encontrado');
    }
    return customer;
  }

  async findByDni(dni: string): Promise<Customer> {
    const customer = await this.customerModel.findOne({ dni }).exec();
    if (!customer) {
      throw new NotFoundException('Cliente no encontrado');
    }
    return customer;
  }

  async saveSimulation(customerId: string, simulation: Simulation) {
    await this.customerModel
      .findByIdAndUpdate(
        customerId,
        { $push: { simulations: simulation } },
        { new: true },
      )
      .exec();
    return this.findById(customerId);
  }
}
