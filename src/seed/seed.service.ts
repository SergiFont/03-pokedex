import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel( Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>, // dependencia inyectada
    private readonly http: AxiosAdapter,
  ) {}



  async executeSeed() {

    await this.pokemonModel.deleteMany( {})

    const data: PokeResponse = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')

    // const insertPromisesArray = []
    const pokemonToInsert: {name: string, no: number}[] = []

    data.results.forEach(( { name, url } ) => {
      
      const segments = url.split('/'); // fragmento la url en segmentos
      const no: number = +segments[ segments.length - 2 ] // extraigo el número en la penúltima posición de la url fragmentada

      // insertPromisesArray.push(
      //   this.pokemonModel.create({no, name})
      // ) 
      /**
       * En la primera opción, se creaba un array de promesas con todas ellas sin resolver. Luego fuera del for each, se resolvian
       * con el Promise.all. De esta manera se insertan de uno en uno en la base de datos.
       * En la segunda opción (la aplicada) se crea un array de objetos con los datos necesarios de cada pokemon. De esta otra
       * manera se insertan todos de golpe en la base de datos. Mucho mas eficiente.
       */
      pokemonToInsert.push( {name, no} )

    })

    // await Promise.all( insertPromisesArray );
    this.pokemonModel.insertMany(pokemonToInsert)

    return 'Seed executed'
  }
}
