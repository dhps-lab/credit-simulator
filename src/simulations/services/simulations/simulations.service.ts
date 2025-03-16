import { ConflictException, Injectable } from '@nestjs/common';
import { CustomersService } from './../../../customers/services/customers/customers.service';
import { ParametersService } from './../../../parameters/services/parameters/parameters.service';
import { Simulation } from 'src/customers/entities/customer.entity';

@Injectable()
export class SimulationsService {
  constructor(
    private readonly customersService: CustomersService,
    private readonly parametersService: ParametersService,
  ) {}

  async simulatesCredit(customerId: string, amount: number, time: number) {
    let customer = await this.customersService.findByDni(customerId);
    const interestFee = await this.parametersService.getCreditProfilesByName(
      customer.credit_profile,
      amount,
    );
    const term = await this.parametersService.getTerm(time);
    const ageCustomer =
      new Date().getFullYear() - customer.birthdate.getFullYear();
    const insurancePercentage =
      await this.parametersService.getRangeInsuranceFee(ageCustomer);
    const monthlyPaymentBase = (amount * interestFee) / term;
    const insuranceQuota = monthlyPaymentBase * insurancePercentage;
    const monthly_payment_full = monthlyPaymentBase * (1 + insurancePercentage);
    if (monthly_payment_full > customer.borrowing_capacity) {
      throw new ConflictException(
        `Valor de la cuota con seguro excede la capacidad de endeudamiento`,
      );
    }
    const simulation = new Simulation(
      amount,
      term.toString(),
      insuranceQuota,
      monthlyPaymentBase,
    );
    customer = await this.customersService.saveSimulation(
      customer._id,
      simulation,
    );
    console.log(customer);
    return { monthly_payment_full, ...simulation };
  }
}
