import { ParametersService } from './../../../parameters/services/parameters/parameters.service';
import { CustomersService } from 'src/customers/services/customers/customers.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OffersService {
  constructor(
    private readonly customersService: CustomersService,
    private readonly parametersService: ParametersService,
  ) {}

  async getOffersByCustomer(customerDni: string) {
    const customer = await this.customersService.findByDni(customerDni);
    console.log(customer);
    console.log(customer.offers);
    return customer.offers;
  }

  async getOffersByCustomerWithState(customerDni: string, state: string) {
    const customer = await this.customersService.findByDni(customerDni);
    const stateChecked = await this.parametersService.checkState(state);
    const offers = customer.offers.filter(
      (offer) => offer.state === stateChecked,
    );
    return offers;
  }
}
