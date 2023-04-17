import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Pokemon extends Document { // le añade a la clase Pokemon todas las funcionalidades del Document de mongoose

    //id: string // Este Id lo genera Mongo
    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;

}



export const PokemonSchema = SchemaFactory.createForClass( Pokemon );
