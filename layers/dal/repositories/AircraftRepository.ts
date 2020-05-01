import { inject, injectable } from 'inversify';
import { Repository as TypeOrmRepository } from 'typeorm';

import Aircraft from 'domain/entities/Aircraft';
import IAircraftRepository from 'domain/interfaces/IAircraftRepository';

import { TYPES } from '../types';
import AircraftEntity from '../entities/AircraftEntity';
import AircraftDataMapper from '../data-mappers/AircraftDataMapper';
import GenericRepository from '../repositories/GenericRepository';

@injectable()
export default class AircraftRepository
    extends GenericRepository<Aircraft, AircraftEntity>
    implements IAircraftRepository {
    public constructor(
        @inject(TYPES.TypeOrmRepositoryOfAircraftEntity) repository: TypeOrmRepository<AircraftEntity>
    ) {
        super(repository, new AircraftDataMapper())
    }

    // Add custom methods here ...

}
