import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentDto } from 'src/dto/payment-dto';
import { PaymentUpdateDto } from 'src/dto/payment-update-dto';
import { Payment } from 'src/entities/payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentsService {
    constructor(
        @InjectRepository(Payment)
        private readonly paymentRepository: Repository<Payment>) {}

    /**
     * It returns a promise that resolves to an array of payment objects that match the paymentId
     * passed in
     * @param {number} paymentId - number - This is the ID of the payment we want to retrieve.
     * @returns An array of payment objects
     */
    async getByID(paymentId: number){
        return await this.paymentRepository.find({where: {id: paymentId}});
    }

    /**
     * It returns a payment object that has a travelId that matches the travelId passed in as a
     * parameter
     * @param {number} travelId - number - The travel ID of the payment you want to get.
     * @returns The payment object with the travelId and the travel object.
     */
    async getPaymentByTravelID(travelId: number){
        return await this.paymentRepository.findOne({
            where: { travelId: travelId},
            relations: ['travel']
        });
    }

    /**
     * It creates a new payment record, and then saves it to the database
     * @param {PaymentDto} newPayment - PaymentDto
     * @param {TravelUpdateDto} travel - TravelUpdateDto
     * @returns The new record is being returned.
     */
    async createPayment(newPayment: PaymentDto, transactionId: string ){

        const newRecord = new Payment();

        newRecord.subTotalTime = newPayment.subTotalTime;
        newRecord.subTotalDistance = newPayment.subTotalTime;
        newRecord.tax = newPayment.tax;
        newRecord.Total = newPayment.total;
        newRecord.status = 0;
        newRecord.travelId = newPayment.travelId;
        newRecord.finishDate = new Date();
        newRecord.infoTransaction= transactionId;


        
        return this.paymentRepository.save(newRecord);
    }

    /**
     * It takes a PaymentUpdateDto as an argument, finds the payment with the id that matches the id in
     * the PaymentUpdateDto, updates the payment with the new values, and then saves the payment
     * @param {PaymentUpdateDto} updatePayment - PaymentUpdateDto
     * @returns The payment that was updated.
     */
    async updatePayment(updatePayment: PaymentUpdateDto){
        const paymentToUpdate: Payment = await this.paymentRepository.findOneBy({id: updatePayment.id});
        
        paymentToUpdate.finishDate = updatePayment.finishDate;
        paymentToUpdate.infoTransaction = updatePayment.infoTransaction;
        paymentToUpdate.status = updatePayment.status;
        
        return this.paymentRepository.save(paymentToUpdate);
    }
}
