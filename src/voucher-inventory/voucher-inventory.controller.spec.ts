import { Test, TestingModule } from '@nestjs/testing';
import { VoucherInventoryController } from './voucher-inventory.controller';
import { VoucherInventoryService } from './voucher-inventory.service';

describe('VoucherInventoryController', () => {
  let controller: VoucherInventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoucherInventoryController],
      providers: [VoucherInventoryService],
    }).compile();

    controller = module.get<VoucherInventoryController>(VoucherInventoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
