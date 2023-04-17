// import { ParseIntPipe } from "@nestjs/common";
import { 
    IsInt, 
    IsPositive, 
    IsString, 
    Min, 
    MinLength 
} from "class-validator";

export class CreatePokemonDto {

    //isInt, isPositive, min 1
    @Min(1)
    @IsInt()
    @IsPositive()
    no: number;

    // isString, Minlength 1
    @IsString()
    @MinLength(1)
    name: string;
}
