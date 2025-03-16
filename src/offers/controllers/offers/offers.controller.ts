import { Controller, Get, Param, Query } from '@nestjs/common';
import { OffersService } from '../../services/offers/offers.service';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get(':customer')
  getsOffersWithState(
    @Param('customer') customerId: string,
    @Query('state') state: string,
  ) {
    if (!state) {
      return this.offersService.getOffersByCustomer(customerId);
    }
    return this.offersService.getOffersByCustomerWithState(customerId, state);
  }
}
