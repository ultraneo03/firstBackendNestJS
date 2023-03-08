import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiderController } from './controllers/rider.controller';
import { DriverController } from './controllers/driver.controller';
import { TravelController } from './controllers/travel.controller';
import { PaymentController } from './controllers/payment.controller';
import { configService } from './config/config/config.service';
import { DriversService } from './services/drivers.service';
import { PaymentsService } from './services/payments.service';
import { TravelsService } from './services/travels.service';
import { RidersService } from './services/riders.service';
import { Rider } from './entities/rider.entity';
import { Driver } from './entities/driver.entity';
import { Travel } from './entities/travel.entity';
import { Payment } from './entities/payment.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WsPaymentService } from './services/ws-payment.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forRoot( configService.dataSourceOptions ), 
    TypeOrmModule.forFeature([Driver,Rider,Travel,Payment]),
    HttpModule
  ],
  controllers: [RiderController, DriverController, TravelController, PaymentController, AppController],
  providers: [DriversService,  RidersService, TravelsService, PaymentsService, AppService, WsPaymentService],
})
export class AppModule {}
