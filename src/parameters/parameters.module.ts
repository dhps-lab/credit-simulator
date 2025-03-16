import { Module } from '@nestjs/common';
import { ParametersService } from './services/parameters/parameters.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Parameter } from './entities/parameter.entity';
import { ParameterSchema } from './schemas/Parameter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Parameter.name, schema: ParameterSchema },
    ]),
  ],
  providers: [ParametersService],
  exports: [ParametersService],
})
export class ParametersModule {}
