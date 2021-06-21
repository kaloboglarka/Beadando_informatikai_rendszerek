import { type } from 'os';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from './Status';
import { User } from './User';

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'text' })
    gyarto: string;

    @Column({ nullable: true, type: 'text' })
    tipus: string;

    @Column({ nullable: true, type: 'text' })
    rendszam: string;

    @Column({ type: 'float' })
    kolcsonzesiDij: number;

    @Column({ nullable: true, type: 'text' })
    alvazszam: string;

    @Column({ nullable: true, type: 'text' })
    beszerzesDatuma: string;

    @Column({ type: 'float' })
    futottKm: number;

    @Column({ nullable: true })
    imgUrl: string;

    @ManyToOne(type => User, {
        eager: true,
        cascade: true
    })
    uploader: User;

    @Column({ nullable: true, type: 'text' })
    statuses: string;

    /*@ManyToOne(type => Status, {
        eager: true,
        cascade: true
    })
    statusz: Status;*/
}


    