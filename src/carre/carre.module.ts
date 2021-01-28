import { HttpModule, Module } from '@nestjs/common';
import { CarreController } from './carre.controller';
import { CarreService } from './carre.service';

@Module({
  imports :[HttpModule],
  controllers: [CarreController],
  providers: [CarreService]
})
export class CarreModule {}
