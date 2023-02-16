import { CoffeesModule } from './../coffees/coffees.module';
import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule.regester({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
    }),
    CoffeesModule,
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
