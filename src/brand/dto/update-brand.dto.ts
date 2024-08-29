/*import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';

PartialType no ayuda a obtener las propiedades de otra clase o DTO 
pero estas seran opcionales 
export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
*/ 
import { IsNumber, IsString, IsUUID } from "class-validator";


export class UpdateBrandDto {
    
    @IsUUID( )
    @IsString()
    readonly id:string;

    @IsString()
    readonly name:string;
}

