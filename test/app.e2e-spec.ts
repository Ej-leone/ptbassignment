import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, Response } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voucher } from '../src/voucher-inventory/entities/voucher.entity';
import { VoucherInventory } from '../src/voucher-inventory/entities/voucher-inventory.entity';
import { async } from 'rxjs';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {

    jest.setTimeout(600000);


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

  it('/ create Inventory', async () => {
    return await request(app.getHttpServer())
      .post('/inventories')
      .send({
        "title": "Test 6",
        "description": "something to test here",
        "endDate": "2016-09-18T17:34:02.666Z"
      })
      .expect(201)
      .expect(Response => {
        expect(Response.body).toBeInstanceOf(Object);
      });
  });


  it('/Generate Vouchers',async () => {

    const inventory = await request(app.getHttpServer())
    .post('/inventories')
    .send({
      "title": "Test Gen Vouchers Example",
      "description": "something to Generate ",
      "endDate": "2016-09-18T17:34:02.666Z"
    }).expect(201);
  
   console.log({
    inventory: inventory.body
   })
   
   const  { id}  = inventory.body

    return request(app.getHttpServer())
      .post('/inventories/'+ id +'/vouchers')
      .send({
        "count": 0,
      })
      .expect(201)
      .expect(Response => {
        expect(Response.body).toBeInstanceOf(Array);
      });
  });


it('/ Finds all the inventories', () => {
    return request(app.getHttpServer())
      .get('/inventories')
      .expect(200)
      .expect(Response => {
        expect(Response.body).toBeInstanceOf(Array);
      });
  });


  
it('/ Retreive a inventory',async () => { 

  const inventory = await request(app.getHttpServer())
  .post('/inventories')
  .send({
    "title": "Test Gen Vouchers Example",
    "description": "something to Generate ",
    "endDate": "2016-09-18T17:34:02.666Z"
  }).expect(201);

 console.log({
  inventory: inventory.body
 })
 
 const  { id }  = inventory.body


  return await request(app.getHttpServer())
    .get('inventories/'+ id)
    .expect(200)
    .expect(Response => {
      expect(Response.body).toBeInstanceOf(Object);
    });
});

it('/update an inventory', () => {
  return request(app.getHttpServer())
    .put('inventories/1')
    .expect(200)
    .expect(Response => {
      expect(Response.body).toBeInstanceOf(Object);
    });
});

it('/clear voucher', () => {
  return request(app.getHttpServer())
    .delete('/inventories/1/vouchers')
    .expect(200)
    .expect(Response => {
      expect(Response.body).toBeInstanceOf(Object);
    });
});

it('/delete an inventory', () => {
  return request(app.getHttpServer())
    .delete('/inventories/1')
    .expect(200)
    .expect(Response => {
      expect(Response.body).toBeInstanceOf(Object);
    });
    
    
});




});
