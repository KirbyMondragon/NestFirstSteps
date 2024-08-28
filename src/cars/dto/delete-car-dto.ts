import { IsString, IsUUID } from "class-validator";

export class UpdateCarDTO {

    @IsUUID()
    @IsString()
    readonly id?: string;

}
