import { Test, TestingModule } from '@nestjs/testing';
import { SimulationsController } from './simulations.controller';
import { SimulationsService } from './../../services/simulations/simulations.service';
import { CustomersModule } from '../../../customers/customers.module';

describe('SimulationsController', () => {
  let controller: SimulationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CustomersModule],
      controllers: [SimulationsController],
      providers: [SimulationsService],
    }).compile();

    controller = module.get<SimulationsController>(SimulationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should response credit payment plan', async () => {
    const response = await controller.simulatesCredit({
      amount: 12,
      customerId: '12345',
      months: 12,
    });
    expect(response).toStrictEqual(12);
  });
});
