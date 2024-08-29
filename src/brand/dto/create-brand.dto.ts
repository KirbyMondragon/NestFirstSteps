import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateBrandDto {

    @IsString({ message: "The brand must be a cool string" })
    @MinLength(4)
    readonly name: string;

}
