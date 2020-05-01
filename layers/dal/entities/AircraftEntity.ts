import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity()
export default class AircraftEntity {
    @PrimaryGeneratedColumn()
    public id!: number;
    @Column()
    public name!: string;
}
