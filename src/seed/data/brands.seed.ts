import { Brand } from "src/brand/entities/brand.entity";
import {v4 as uuid} from 'uuid'
export const BRANDS_SEED: Brand[] =[
    {
        id:uuid(),
        name:"Volkswagen",
        createdAt: new Date().getTime(),
        updatedAt:new Date().getTime()
    },
    {
        id:uuid(),
        name:"Mazda",
        createdAt: new Date().getTime(),
        updatedAt:new Date().getTime()
    },   
    {
        id:uuid(),
        name:"Mercedes",
        createdAt: new Date().getTime(),
        updatedAt:new Date().getTime()
    }, 
    {
        id:uuid(),
        name:"Honda",
        createdAt: new Date().getTime(),
        updatedAt:new Date().getTime()
    }    

    
]