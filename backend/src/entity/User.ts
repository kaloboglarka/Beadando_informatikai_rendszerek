import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Car } from './Car';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nev: string;

    @Column()
    cim: string;

    @Column()
    igazolvanyszam: string;

    @Column()
    telefon: number;

    @OneToMany(type => Car, car => car.uploader)
    cars: Car[];

}
