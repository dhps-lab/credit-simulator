import { Injectable } from '@nestjs/common';
import { CustomersService } from './../../../customers/services/customers/customers.service';

@Injectable()
export class SimulationsService {
  constructor(private readonly customersService: CustomersService) {}

  async simulatesCredit(customerId: string, amount: number, time: number) {
    const customer = await this.customersService.findByDni(customerId);
    const monthlyPayment = (amount / time) * customer.borrowing_capacity * 0.25;
    return monthlyPayment;
  }
}
