import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Travel } from "./travel.entity";

/* It's a class that represents a Rider entity, with the following properties: id, name, secondName,
lastName, secondLastName, createDateTime, document, birthDate, age, username and password */
@Entity()
export class Rider {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    secondName: string;

    @Column({ type: 'varchar', length: 100 })
    lastName: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    secondLastName: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @Column({ type: 'varchar', length: 100 })
    document: string;

    @Column({ type: 'varchar', length: 100 })
    birthDate: string;

    @Column({ type: 'varchar', length: 100 })
    age: string;

    @Column({ type: 'varchar', length: 100 })
    username: string;

    @Column({ type: 'varchar', length: 100 })
    password: string;
    /*
    @OneToMany(() => Travel, (travel: Travel) => travel.riderId)
    public travels: Travel[];
    */
}
