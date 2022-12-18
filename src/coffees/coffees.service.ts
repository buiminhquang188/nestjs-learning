import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffess: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffess;
  }

  findOne(id: string) {
    return this.coffess.find(item => item.id === Number(id));
  }

  create(createCoffeeDto: any) {
    this.coffess.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id, body) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
    }
  }

  remove(id: string) {
    return this.coffess.filter(coffee => coffee.id !== Number(id));
  }
}
