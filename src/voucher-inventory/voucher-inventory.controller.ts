import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoucherInventoryService } from './voucher-inventory.service';
import { CreateVoucherInventoryDto } from './dto/create-voucher-inventory.dto';
import { UpdateVoucherInventoryDto } from './dto/update-voucher-inventory.dto';

@Controller('voucher-inventory')
export class VoucherInventoryController {
  constructor(private readonly voucherInventoryService: VoucherInventoryService) {}

  @Post()
  create(@Body() createVoucherInventoryDto: CreateVoucherInventoryDto) {
    return this.voucherInventoryService.create(createVoucherInventoryDto);
  }

  @Get()
  findAll() {
    return this.voucherInventoryService.findAll();
  }


  @Get(':id')
  generateVoucherCodes(@Param('id') id: string) {
    return this.voucherInventoryService.findOne(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voucherInventoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoucherInventoryDto: UpdateVoucherInventoryDto) {
    return this.voucherInventoryService.update(+id, updateVoucherInventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voucherInventoryService.remove(+id);
  }

  @Delete(':id')
  clearvouchers(@Param('id') id: string) {
    return this.voucherInventoryService.remove(+id);
  }
}
