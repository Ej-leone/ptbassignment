import { PartialType } from '@nestjs/mapped-types';
import { CreateVoucherInventoryDto } from './create-voucher-inventory.dto';

export class UpdateVoucherInventoryDto extends PartialType(CreateVoucherInventoryDto) {}
