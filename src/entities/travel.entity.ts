import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Driver } from "./driver.entity";
import { Rider } from "./rider.entity";

/* The Travel class is an entity that has a one-to-one relationship with itself, a one-to-many
relationship with the Rider class, and a one-to-many relationship with the Driver class */
@Entity()
export class Travel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int'})
    riderId: number;

    @Column({ type: 'int', nullable:true})
    driverId: number;

    @Column({ type: 'varchar', length: 100 })
    latitudeStart: string;

    @Column({ type: 'varchar', length: 100 })
    longitudeStart: string;

    @Column({ type: 'varchar', length: 100 })
    AddressStart: string;

    @Column({ type: 'varchar', length: 100, nullable:true })
    latitudeEnd: string;

    @Column({ type: 'varchar', length: 100, nullable:true })
    longitudeEnd: string;

    @Column({ type: 'varchar', length: 200, nullable:true })
    AddressEnd: string;

    @Column({ type: 'int', default: 0 })
    status: number;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDate: Date;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'null', nullable:true })
    finishDate: Date;

    @Column({type: "decimal", precision: 6, scale: 2, default: 0})
    distanceTotal: number;

    @Column({type: "decimal", precision: 6, scale: 2, default: 0})
    timeTotal: number;
    /*
    @ManyToOne(() => Rider, (rider: Rider) => rider.travels)
    public rider: Rider;

    @ManyToOne(() => Driver, (driver: Driver) => driver.travels)
    public driver: Driver;
    
    @OneToOne(() => Travel, (travel: Travel) => travel.travel)
    public travel: Travel;
    */
}
