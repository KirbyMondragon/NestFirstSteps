import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDTO {

    @IsUUID()
    @IsString()
    @IsOptional()
    readonly id?: string;

    @IsString({ message: "The brand most be a cool string"})
    @IsOptional()
    readonly brand?:string;

    @IsString({message: "The model is not fine"})
    @MinLength(3)
    @IsOptional()
    readonly model?:string;
}
