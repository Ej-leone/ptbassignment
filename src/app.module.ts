import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoucherModule } from './voucher/voucher.module';
import { VoucherInventoryModule } from './voucher-inventory/voucher-inventory.module';

@Module({
  imports: [VoucherModule, VoucherInventoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
