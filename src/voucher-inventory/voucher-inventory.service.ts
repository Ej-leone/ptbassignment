import { Injectable } from '@nestjs/common';
import { CreateVoucherInventoryDto } from './dto/create-voucher-inventory.dto';
import { UpdateVoucherInventoryDto } from './dto/update-voucher-inventory.dto';
import { Repository } from 'typeorm';
import { Voucher } from './entities/voucher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { VoucherInventory } from './entities/voucher-inventory.entity';
import { GenerateVoucherDto } from './dto/generate-voucher.dto';
import { NotFoundException } from '../util/not-found';
import { generateVoucherCode } from '../util/generate-voucher';

@Injectable()
export class VoucherInventoryService {
  constructor(
    @InjectRepository(Voucher)
    private voucherRepository: Repository<Voucher>,
    @InjectRepository(VoucherInventory)
    private voucherInventoryRepository: Repository<VoucherInventory>,
  ) {}

  async create(createVoucherInventoryDto: CreateVoucherInventoryDto) {
    const voucherInventory = await this.voucherInventoryRepository.create({
      ...createVoucherInventoryDto,
      count: 0,
    });
    return await this.voucherInventoryRepository.save(voucherInventory);
  }

  async generateVoucherCodes(
    inventoryId: number,
    generateVoucherDto: GenerateVoucherDto,
  ) {
    const Inventory = await this.voucherInventoryRepository.findOne({
      where: { id: inventoryId },
    });

    if (!Inventory) {
      throw new NotFoundException(`Inventory with  id  Not Found `);
    }

    const { count } = generateVoucherDto;
    const vouchers = new Array(count).fill(null).map(async () => {
      const code = generateVoucherCode()
      const voucher = this.voucherRepository.create({
        inventory: Inventory,
        code,
      });
      await this.voucherRepository.save(voucher);
      return voucher;
    });
    return await Promise.all(vouchers);
  }

  async findAll() {
    return await this.voucherInventoryRepository.find();
  }

  async findOne(id: number) {
    const Inventory = await this.voucherInventoryRepository.findOne({
      where: { id },
    });

    if (!Inventory) {
      throw new NotFoundException(
        ` the Voucher Inventory with ${id} not Found`,
      );
    }

    return Inventory;
  }

  async update(
    id: number,
    updateVoucherInventoryDto: UpdateVoucherInventoryDto,
  ) {
    const Inventory = await this.voucherInventoryRepository.findOne({
      where: { id },
    });

    if (!Inventory) {
      throw new NotFoundException(
        ` the Voucher Inventory with ${id} not Found`,
      );
    }
    return await this.voucherInventoryRepository.update(
      id,
      updateVoucherInventoryDto,
    );
  }

  async remove(id: number) {
    await this.voucherRepository.delete({ inventory: { id } });
    return await this.voucherInventoryRepository.delete(id);
  }

  async clearCodes(inventoryId: number) {
    return await this.voucherRepository.delete({ inventory: { id : inventoryId } });
  }
}
