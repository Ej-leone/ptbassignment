import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { VoucherInventory } from './voucher-inventory.entity';

@Entity()
export class Voucher {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => VoucherInventory, (inventory) => inventory.vouchers)
  inventory: VoucherInventory;

  @Column()
  code: string;
}
