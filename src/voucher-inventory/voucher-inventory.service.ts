import { Injectable } from '@nestjs/common';
import { CreateVoucherInventoryDto } from './dto/create-voucher-inventory.dto';
import { UpdateVoucherInventoryDto } from './dto/update-voucher-inventory.dto';

@Injectable()
export class VoucherInventoryService {
  create(createVoucherInventoryDto: CreateVoucherInventoryDto) {
    return 'This action adds a new voucherInventory';
  }

  generateVoucherCodes(createVoucherInventoryDto: CreateVoucherInventoryDto) {
    return 'This action adds a new voucherInventory';
  }

  findAll() {
    return `This action returns all voucherInventory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voucherInventory`;
  }

  update(id: number, updateVoucherInventoryDto: UpdateVoucherInventoryDto) {
    return `This action updates a #${id} voucherInventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} voucherInventory`;
  }

  clearCodes(id: number) {
    return `This action clears all voucher code #${id} voucherInventory`;
  }
}
