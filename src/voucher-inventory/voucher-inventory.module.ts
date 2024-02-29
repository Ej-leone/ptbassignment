import { Module } from '@nestjs/common';
import { VoucherInventoryService } from './voucher-inventory.service';
import { VoucherInventoryController } from './voucher-inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voucher } from './entities/voucher.entity';
import { VoucherInventory } from './entities/voucher-inventory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Voucher, VoucherInventory])],
  controllers: [VoucherInventoryController],
  providers: [VoucherInventoryService],
})
export class VoucherInventoryModule {}
