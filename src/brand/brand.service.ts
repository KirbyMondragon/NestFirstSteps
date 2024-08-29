import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import {v4 as uuid} from 'uuid'
import { Brand } from './entities/brand.entity';


@Injectable()
export class BrandService {
  private brands: Brand[] =[
    
]


  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id)
      if (!brand) throw new NotFoundException(`The brand ${id} isn't found`)
      
      return brand;
  }

  create(createBrandDto: CreateBrandDto) {

    const {name} = createBrandDto;

    const brand:Brand = {
      id: uuid(),  // Genera un id como string
      name: name,
      createdAt: new Date().getTime(), 
    }

    this.brands.push(brand);
    return brand;
  }


  update(id: string, updateBrandDto: UpdateBrandDto) {

      let brandDB = this.findOne( id );


      if(updateBrandDto.id && updateBrandDto.id !== id){
          throw new BadRequestException(`brand id isn't valid `)
      }
      this.brands = this.brands.map(
        brand => {
          if (brand.id === id ){
            brandDB = {...brandDB,  ...updateBrandDto,id,}

            return brandDB;
        }
        return brand; 
        })
        return brandDB;
    
  }

  remove(id: string) {
    let brand = this.findOne( id );
    this.brands = this.brands.filter(brand => brand.id !== id);
  }

  fillBrandWithSeedData(brands: Brand[]){
    this.brands = brands;
  }
}
