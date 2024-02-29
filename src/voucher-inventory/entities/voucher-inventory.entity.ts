import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Voucher } from './voucher.entity';

@Entity()
export class VoucherInventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  endDate: Date;

  @Column()
  count: number;

  @OneToMany(() => Voucher, (voucher) => voucher.inventory)
 vouchers: Voucher[];
}
