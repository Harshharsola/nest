import { Module } from '@nestjs/common';
import { CarreModule } from './carre/carre.module';

@Module({
  imports: [CarreModule],

})
export class AppModule {}
