export default interface IEntityDataMapper<Domain, Entity> {
    toDomain(entity: Entity): Domain;
    toDalEntity(domain: Domain): Entity;
}
