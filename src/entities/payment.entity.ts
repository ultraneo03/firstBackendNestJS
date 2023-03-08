import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Travel } from "./travel.entity";

/* The Payment class is an entity that contains the information of the payment of a travel */
@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    subTotalTime: number;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    subTotalDistance: number;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    tax: number;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    Total: number;

    @Column({ type: 'int', default: 0 })
    status: number;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDate: Date;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'null' })
    finishDate: Date;

    @Column({ type: 'varchar', length: 500 })
    infoTransaction: string;

    @Column({ type: 'int', default: 0 })
    travelId: number;
    /*
    @OneToOne(() => Travel)
    @JoinColumn()
    travel: Travel
    */
}
