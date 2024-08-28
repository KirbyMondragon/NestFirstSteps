import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDTO , UpdateCarDTO} from './dto';


//Aqui alojamos la logica del negocio para que sea reutilizable atravez de inyencion de dependencias
@Injectable()
export class CarsService {

    private cars:Car[] = [
    {
        id: uuid(),
        brand: "Toyota",
        model:"Corolla"
    },
    {
        id: uuid(),
        brand: "Honda",
        model:"Civic"
    },
    {
        id: uuid(),
        brand: "Ford",
        model:"Cheyene"
    },
];
    findAll() {
        return this.cars
    }


    findOneById(id: string){
        const car = this.cars.find(car => car.id === id)
        
        if( !car ) throw new NotFoundException(`Car with id '${ id }' not found '`);
        //throw New TipoDeExcepcion , nos ayuda a mandar una alerta 
    
        return car;
     }

     create( createCarDto: CreateCarDTO){
        const car:Car ={
            id: uuid(),
            brand: createCarDto.brand,
            model: createCarDto.model
        }
        
        this.cars.push( car)
     }

     update(id:string, updateCarDTO:UpdateCarDTO){
        let carDB = this.findOneById( id );


        if(updateCarDTO.id && updateCarDTO.id !== id){
            throw new BadRequestException(`Car id isn't valid inside body`)
        }
        this.cars = this.cars.map(car => {

            if (car.id === id ){
                carDB = {...carDB,  ...updateCarDTO,id,}

                return carDB;
            }
            return car;
        }) 
        

        return carDB; //Carro actualizado
     }


     delete(id:string){
        let car = this.findOneById( id );
        this.cars = this.cars.filter(car => car.id !== id);

     }
}

 