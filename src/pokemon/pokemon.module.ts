import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity'

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Pokemon.name, // propiedad 'name' sale del Document de mongoose, no de la entidad Pokemon en si
        schema: PokemonSchema,
      }
    ])
  ],
  exports: [MongooseModule]
})
export class PokemonModule {}
