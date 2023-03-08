import { catchError, firstValueFrom } from 'rxjs';
import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { PaymentDto } from 'src/dto/payment-dto';

@Injectable()
export class WsPaymentService {
    private readonly logger = new Logger(WsPaymentService.name);
    constructor(private readonly httpService: HttpService) {}

    async getMerchants(pubKey: string): Promise<any[]> {
        const { data } = await firstValueFrom(
          this.httpService.get<any[]>('https://sandbox.wompi.co/v1/merchants/'+pubKey).pipe(
            catchError((error: AxiosError) => {
              this.logger.error(error.response.data);
              throw 'An error happened!';
            }),
          ),
        );
        return data;
    }

    async getTokenCard(pubKey: string): Promise<any[]> {
        const { data } = await firstValueFrom(
          this.httpService.post<any[]>('https://sandbox.wompi.co/v1/tokens/cards', 
            {
                "number": "4242424242424242",
                "cvc": "123",
                "exp_month": "08",
                "exp_year": "28",
                "card_holder": "José Pérez"
            }
        ,{
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer '+ pubKey
            }
        }
        ).pipe(
            catchError((error: AxiosError) => {
              this.logger.error(error.response.data);
              throw 'An error happened!';
            }),
          ),
        );
        return data;
    }

    async transactionPayWithCard(acceptance_token: string, quotes: number, tokencard: string, pubKey: string, payment: PaymentDto): Promise<any[]> {
        var total = payment.total*100;
        console.log(total);
        console.log(tokencard);
        var time = new Date().toTimeString();
        console.log(time);
        const { data } = await firstValueFrom(
          this.httpService.post<any[]>('https://sandbox.wompi.co/v1/transactions', 
            {
                "acceptance_token": acceptance_token,
                "amount_in_cents": total,
                "currency": "COP",
                "customer_email": "pepito_perez@example.com",
                "reference": time,
                "payment_method": 
                    {
                        "type": "CARD",
                        "installments": quotes, 
                        "token": tokencard
                    }
                
            }
        ,{
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer '+ pubKey
            }
        }
        ).pipe(
            catchError((error: AxiosError) => {
              this.logger.error(error.response.data);
              throw 'An error happened!';
            }),
          ),
        );
        return data;
    }

    async getTransactionStatusByID(transactionId: string): Promise<any[]> {
        const { data } = await firstValueFrom(
          this.httpService.get<any[]>('https://sandbox.wompi.co/v1/transactions/'+transactionId).pipe(
            catchError((error: AxiosError) => {
              this.logger.error(error.response.data);
              throw 'An error happened!';
            }),
          ),
        );
        return data;
    }
}
