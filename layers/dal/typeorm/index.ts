import { createConnection, getConnection } from 'typeorm';

import AircraftEntity from '../entities/AircraftEntity';

export function getDbConnection() {
  const entities = [
    AircraftEntity
  ];

  return createConnection({
    type: 'sqlite',
    database: './solid-onion.sqlite',
    entities,
    synchronize: true,
  });
}

export const getRepository = () => getConnection().getRepository(AircraftEntity);
