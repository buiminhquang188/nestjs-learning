import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASES_HOST,
      port: +process.env.DATABASES_PORT,
      username: process.env.DATABASES_USER,
      password: process.env.DATABASES_PASSWORD,
      database: process.env.DATABASES_NAME,
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      logging: false,
      autoLoadEntities: true,
      synchronize: false,
    }),
    CoffeeRatingModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
