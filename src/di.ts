import 'reflect-metadata';
import { Repository as TypeOrmRepository } from "typeorm";
import { AsyncContainerModule, Container } from 'inversify';

import { TYPES as DAL_TYPES } from 'dal/types';
import { TYPES as DOMAIN_TYPES } from 'domain/types';
import AircraftEntity from "dal/entities/AircraftEntity";
import { getDbConnection, getRepository } from 'dal/typeorm';
import AircraftRepository from 'dal/repositories/AircraftRepository';

const bindings = new AsyncContainerModule(async (bind) => {
  await getDbConnection();
  bind<TypeOrmRepository<AircraftEntity>>(DAL_TYPES.TypeOrmRepositoryOfAircraftEntity)
    .toDynamicValue(() => getRepository())
    .inRequestScope();
  bind<AircraftRepository>(DOMAIN_TYPES.AircraftRepository).to(AircraftRepository);
});

export const getContainer = async () => {
  const container = new Container();
  await container.loadAsync(bindings);
  return container;
};
