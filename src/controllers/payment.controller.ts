import { Body, Controller, Get, HttpStatus, Post, Put } from '@nestjs/common';
import { Query, Res } from '@nestjs/common/decorators';
import { ApiProperty } from '@nestjs/swagger';
import { PaymentDto } from 'src/dto/payment-dto';
import { PaymentUpdateDto } from 'src/dto/payment-update-dto';
import { PaymentsService } from 'src/services/payments.service';
import { WsPaymentService } from 'src/services/ws-payment.service';

require('dotenv').config();

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentsService, private readonly  wspaymentService:WsPaymentService) {}

    @Get('ByID')
    @ApiProperty()
    public async getByID(@Query('paymentId') paymentId: number) {
        return await this.paymentService.getByID(paymentId);
    }

    @Get('ByTravelID')
    @ApiProperty()
    public async getByTravelID(@Query('travelId') travelId: number) {
        return await this.paymentService.getPaymentByTravelID(travelId);
    }

    @Post()
    public async newPayment(@Body() newPayment: PaymentDto, @Res() response) {
        console.log(process.env.PUB_KEY);
        var merchant: any = await this.wspaymentService.getMerchants(process.env.PUB_KEY);
        console.log(merchant);
        var creditCard:any = await  this.wspaymentService.getTokenCard(process.env.PUB_KEY);
        console.log(creditCard);
        var transaction:any = await this.wspaymentService.transactionPayWithCard(merchant.data.presigned_acceptance.acceptance_token, 2, creditCard.data.id, process.env.PUB_KEY, newPayment)
        console.log(transaction);

        
        await this.paymentService.createPayment(newPayment, transaction.data.id).then(
            async (payment)=>{
                response.status(HttpStatus.CREATED).json(payment);
            }
        ).catch()
        return 
    }

    @Put()
    public async updatePayment(@Body() updatePayment: PaymentUpdateDto) {

        var transaction:any = await this.wspaymentService.getTransactionStatusByID(updatePayment.infoTransaction);
        console.log(transaction);
        if(transaction && transaction.data.status == "APPROVED"){
            updatePayment.status = 3;
        }else{
            updatePayment.status = 4;
        }
        
        return await this.paymentService.updatePayment(updatePayment);
    }
}
