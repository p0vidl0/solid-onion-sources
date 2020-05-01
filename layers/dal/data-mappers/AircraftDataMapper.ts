import Aircraft from 'domain/entities/aircraft';
import AircraftEntity from '../entities/AircraftEntity';
import IEntityDataMapper from '../interfaces/IEntityDataMapper';

export default class AircraftDataMapper implements IEntityDataMapper<Aircraft, AircraftEntity> {
  toDomain(entity: AircraftEntity): Aircraft {
    return new Aircraft(entity.id, entity.name);
  }

  toDalEntity(model: Aircraft): AircraftEntity {
    return new AircraftEntity();
  }
}
