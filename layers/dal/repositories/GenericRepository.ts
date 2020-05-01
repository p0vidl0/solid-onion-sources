import { injectable, unmanaged } from 'inversify';
import { Repository as TypeOrmRepository } from 'typeorm';

import IRepository from 'domain/interfaces/IRepository';

import IEntityDataMapper from '../interfaces/IEntityDataMapper';

@injectable()
export default class GenericRepository<TDomainEntity, TDalEntity>
  implements IRepository<TDomainEntity> {
    private readonly _repository: TypeOrmRepository<TDalEntity>;
    private readonly _dataMapper: IEntityDataMapper<TDomainEntity, TDalEntity>;

    public constructor(
        @unmanaged() repository: TypeOrmRepository<TDalEntity>,
        @unmanaged() dataMapper: IEntityDataMapper<TDomainEntity, TDalEntity>
    ) {
        this._repository = repository;
        this._dataMapper = dataMapper;
    }

    public async readAll() {
        const entities = await this._repository.find();
        return entities.map((e) => this._dataMapper.toDomain(e));
    }

    public async readOneById(id: string) {
        const entity = await this._repository.findOne(id);
        return this._dataMapper.toDomain(entity);
    }

    // ...

}
