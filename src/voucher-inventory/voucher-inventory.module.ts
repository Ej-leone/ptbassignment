import { Module } from '@nestjs/common';
import { VoucherInventoryService } from './voucher-inventory.service';
import { VoucherInventoryController } from './voucher-inventory.controller';

@Module({
  controllers: [VoucherInventoryController],
  providers: [VoucherInventoryService],
})
export class VoucherInventoryModule {}
