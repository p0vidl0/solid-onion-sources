export default interface IRepository<T> {
    readAll(): Promise<T[]>;
    readOneById(id: string): Promise<T>;
    // ...
}
