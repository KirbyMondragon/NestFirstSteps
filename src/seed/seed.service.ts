import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandService } from 'src/brand/brand.service';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carService: CarsService,
    private readonly brandService: BrandService){}
 
  popularDB(){
    this.carService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillBrandWithSeedData(BRANDS_SEED);

    return "Seed Executed"
  }

}
