import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VoucherInventoryService } from './voucher-inventory.service';
import { CreateVoucherInventoryDto } from './dto/create-voucher-inventory.dto';
import { UpdateVoucherInventoryDto } from './dto/update-voucher-inventory.dto';
import { GenerateVoucherDto } from './dto/generate-voucher.dto';

@Controller('inventories')
export class VoucherInventoryController {
  constructor(
    private readonly voucherInventoryService: VoucherInventoryService,
  ) {}

  @Post()
  create(@Body() createVoucherInventoryDto: CreateVoucherInventoryDto) {
    return this.voucherInventoryService.create(createVoucherInventoryDto);
  }

  @Get()
  findAll() {
    return this.voucherInventoryService.findAll();
  }

  @Post(':id/vouchers')
  generateVoucherCodes(
    @Param('id') id: string,
    @Body() generateVoucherDto: GenerateVoucherDto,
  ) {
    return this.voucherInventoryService.generateVoucherCodes(
      +id,
      generateVoucherDto,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voucherInventoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVoucherInventoryDto: UpdateVoucherInventoryDto,
  ) {
    return this.voucherInventoryService.update(+id, updateVoucherInventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voucherInventoryService.remove(+id);
  }

  @Delete(':id/vouchers')
  clearvouchers(@Param('id') id: string) {
    return this.voucherInventoryService.remove(+id);
  }
}
