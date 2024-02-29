import { Test, TestingModule } from '@nestjs/testing';
import { VoucherInventoryService } from './voucher-inventory.service';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Voucher } from './entities/voucher.entity';
import { VoucherInventory } from './entities/voucher-inventory.entity';


describe('VoucherInventoryService', () => {
  let service: VoucherInventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
       
        {
          provide: getRepositoryToken(Voucher),
          useValue: {
            find: jest.fn().mockResolvedValue([]), 
            findOne: jest.fn().mockResolvedValue({}), 
            save: jest.fn().mockImplementation((entity) => Promise.resolve(entity)),
            create: jest.fn().mockResolvedValue({
            id: "1", 
            code: "TESTCODE" 
          }),
        
          delete: jest.fn().mockResolvedValue({}) 
        },
        },
        {
          provide: getRepositoryToken(VoucherInventory),
          useValue: {
            find: jest.fn().mockResolvedValue([]), 
            findOne: jest.fn().mockResolvedValue({
              title: "Test 6",
              description: "something to test here",
              endDate: "2016-09-18T17:34:02.666Z",
              count: 0,
            
            }),
            save: jest.fn().mockImplementation((entity) => Promise.resolve(entity)),
            update:jest.fn().mockResolvedValue({
            
              "title": "updated Title",
              "description": "updated description",
              "endDate": "2016-09-18T17:34:02.666Z",
              "count": 0,
              "id": 2
            }),
            create: jest.fn().mockResolvedValue({
              title: "Test Inventory",
              description: "Test Description",
              endDate: new Date(),
           
            }),
            delete: jest.fn().mockResolvedValue({})
          }
        },
        VoucherInventoryService,],
    }).compile();

    service = module.get<VoucherInventoryService>(VoucherInventoryService);
  });

  it('should create a new inventory', async () => {
    const result = await service.create({
      title: 'Test Inventory',
      description: 'Test Description',
      endDate: new Date(),
    });
    expect(result).toBeDefined();
 });


 it('should generate voucher codes', async () => {
  const inventory = await service.create({
    title: 'Test Inventory',
    description: 'Test Description',
    endDate: new Date(),
  });
  const result = await service.generateVoucherCodes(inventory.id ,{ count: 10});
  expect(result).toBeDefined();
});


it('should return an array of inventories', async () => {
  const result = await service.findAll();
  expect(result).toBeDefined();
});

it('should return an inventory', async () => {
  const inventory = await service.create({
    title: 'Test Inventory',
    description: 'Test Description',
    endDate: new Date(),
  });
  const result = await service.findOne(inventory.id);
  expect(result).toBeDefined();
});



it('should update an inventory ', async () => {
  const inventory = await service.update(1,{
        description: "updated inventory" ,
        title: "updated title",
  });

   
    expect(inventory).toBeDefined();
});


it('should delete an inventory ', async () => {
  const inventory = await service.create({
    title: 'Test Inventory',
    description: 'Test Description',
    endDate:  new Date()});

    const result = await service.remove(inventory.id)
    expect(result).toBeDefined();
});


it('should clear an inventory voucher ', async () => {
  const inventory = await service.create({
    title: 'Test Inventory',
    description: 'Test Description',
    endDate: new Date(),
  }); 

  const vouchers =await service.generateVoucherCodes(inventory.id,{ count: 10})

  expect(vouchers).toBeDefined()

  const result = await service.clearCodes(inventory.id);
  expect(result).toBeDefined();
});


});
