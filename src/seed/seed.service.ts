import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios // dependencia no inyectada

  

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10')

    data.results.forEach(( { name, url}) => {
      
      const segments = url.split('/'); // fragmento la url en segmentos
      const no: number = +segments[ segments.length - 2 ] // extraigo el número en la penúltima posición de la url fragmentada

      console.log({name, no});
    })

    return data.results;
  }
}
