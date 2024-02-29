import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voucher } from '../src/voucher-inventory/entities/voucher.entity';
import { VoucherInventory } from '../src/voucher-inventory/entities/voucher-inventory.entity';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule,TypeOrmModule.forRoot({ 
      type: 'postgres',
      url: process.env.DB_URL,    
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      }), TypeOrmModule.forFeature([Voucher]) ,  TypeOrmModule.forFeature([VoucherInventory])],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ create Inventory', () => {
    return request(app.getHttpServer())
      .post('/inventories')
      .send({
        "title": "Test 6",
        "description": "something to test here",
        "endDate": "2016-09-18T17:34:02.666Z"
      })
      .expect(201)
      .expect('Hello World!');
  });


  it('/ Generate Vouchers', () => {
    return request(app.getHttpServer())
      .post('/inventories/1/vouchers')
      .send({
        "count": 0,
      })
      .expect(200)
      .expect('Hello World!');
  });


it('/ Finds all the inventories', () => {
    return request(app.getHttpServer())
      .get('/inventories')
      .expect(200)
      .expect(body => {
        expect(body).toBeInstanceOf(Array);
      });
  });


  
it('/ Retreive a inventory', () => {
  return request(app.getHttpServer())
    .get('inventories/1')
    .expect(200)
    .expect(body => {
      expect(body).toBeInstanceOf(Object);
    });
});

it('/update an inventory', () => {
  return request(app.getHttpServer())
    .put('inventories/1')
    .expect(200)
    .expect(body => {
      expect(body).toBeInstanceOf(Object);
    });
});

it('/clear voucher', () => {
  return request(app.getHttpServer())
    .post('/inventories/:inventoryId/vouchers')
    .expect(200)
    .expect(body => {
      expect(body).toBeInstanceOf(Object);
    });
});

it('/delete an inventory', () => {
  return request(app.getHttpServer())
    .post('/inventories/:inventoryId')
    .expect(200)
    .expect(body => {
      expect(body).toBeInstanceOf(Object);
    });
});




});
