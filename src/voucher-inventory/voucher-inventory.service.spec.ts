import { Test, TestingModule } from '@nestjs/testing';
import { VoucherInventoryService } from './voucher-inventory.service';

describe('VoucherInventoryService', () => {
  let service: VoucherInventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoucherInventoryService],
    }).compile();

    service = module.get<VoucherInventoryService>(VoucherInventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
