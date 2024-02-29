import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoucherInventoryModule } from './voucher-inventory/voucher-inventory.module';
import { ConfigModule } from '@nestjs/config';




@Module({
  imports: [
    ConfigModule.forRoot(),
    VoucherInventoryModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL,    
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),      
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
