import { PartialType } from '@nestjs/mapped-types';
import { CreateVoucherInventoryDto } from './create-voucher-inventory.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateVoucherInventoryDto extends PartialType(
  CreateVoucherInventoryDto,
) {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
