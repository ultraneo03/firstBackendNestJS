import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Travel } from "./travel.entity";

@Entity()
/* It's a class that represents a driver, and it has a bunch of properties that describe the driver */
export class Driver {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 100 })
    lastname: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDate: Date;

    @Column({ type: 'varchar', length: 20 })
    document: string;

    @Column({ type: 'varchar', length: 10})
    vehicleRegistration: string;

    @Column({ type: 'varchar', length: 100 })
    vehicleModel: string;

    @Column({ type: 'varchar', length: 100 })
    vehicleColor: string;

    @Column({ type: 'boolean', default: true })
    available: boolean;

    @Column({ type: 'boolean', default: true })
    isWorking: boolean;

    @Column({ type: 'varchar', length: 100 })
    longitude: string;

    @Column({ type: 'varchar', length: 100 })
    latitude: string;
    /*
    @OneToMany(() => Travel, (travel: Travel) => travel.driverId)
    public travels: Travel[];
    */
}
