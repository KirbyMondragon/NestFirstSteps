import { Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { ok } from 'assert';
import { CreateCarDTO } from './dto/create-car-dto';
import { UpdateCarDTO } from './dto/update-car-dto';


@Controller('cars')
     //UsePipes con ValidationPipe, nos ayuda a valir a los datos que entran por esta 
//@UsePipes( ValidationPipe )
export class CarsController {
    constructor(private readonly carsService: CarsService){

    }

    @Get()
    getAllCars(){
       return this.carsService.findAll();
    }
    
    @Get(':id')
    getCarById( @Param('id',ParseUUIDPipe ) id:string ){
       return this.carsService.findOneById(String(id));
     }
     
     @Post()
     createCar( @Body() createCardDTO :CreateCarDTO ){
     return this.carsService.create(createCardDTO);
     }

     @Patch(':id')
     updateCar(
      @Param('id', ParseUUIDPipe) id:string,
      @Body() updateCarDTO:UpdateCarDTO 

      )
      {
      return this.carsService.update(id, updateCarDTO);
     }   

     @Delete(':id')
     deleteCar( @Param('id', ParseUUIDPipe ) id:string){
     
      return this.carsService.delete(id);
     }
     
    
}
