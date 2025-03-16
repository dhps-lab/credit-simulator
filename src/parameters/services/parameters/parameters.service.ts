import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Parameter } from 'src/parameters/entities/parameter.entity';

@Injectable()
export class ParametersService {
  private parameter: Parameter;
  constructor(
    @InjectModel('Parameter') private customerModel: Model<Parameter>,
  ) {}

  async findLastParam() {
    const parameter = await this.customerModel.findOne().sort({ _id: 'desc' });
    if (!parameter) {
      throw new NotFoundException("Parameters aren't load");
    }
    this.parameter = parameter;
    return parameter;
  }

  async getCreditProfilesByName(name: string, amount: number) {
    this.parameter = this.parameter || (await this.findLastParam());

    const creditProfile = this.parameter.credit_profiles.filter(
      (profile) => profile.name === name,
    )[0];
    const fee = creditProfile.interest_rate.filter((interestRate) => {
      if (!interestRate.max_amount && interestRate.min_amount <= amount) {
        return interestRate;
      }
      if (
        interestRate.max_amount &&
        interestRate.min_amount <= amount &&
        interestRate.max_amount >= amount
      ) {
        return interestRate;
      }
    })[0];
    return fee.value / 100;
  }

  async getTerm(time: number) {
    this.parameter = this.parameter || (await this.findLastParam());
    const terms = this.parameter.terms.filter(
      (termParameters) => termParameters === time,
    );
    if (terms.length !== 1) {
      throw new ConflictException('Term not valid');
    }
    return terms[0];
  }

  async getRangeInsuranceFee(age: number) {
    this.parameter = this.parameter || (await this.findLastParam());
    const rangeFiltered = this.parameter.ranges_insurance_fee.filter(
      (range) => range.min_age <= age && range.max_age >= age,
    );
    return rangeFiltered[0].percentage / 100;
  }
}
