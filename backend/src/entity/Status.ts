import { type } from 'os';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from './Car';

@Entity()
export class Status {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    /*@OneToMany(type => Car, car => car.statusz)
    cars: Car[];*/
}
