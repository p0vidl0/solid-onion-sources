import IRepository from './IRepository';
import Aircraft from '../entities/Aircraft';

export default interface IAircraftRepository extends IRepository<Aircraft> {
    // Add custom methods here ...
}
