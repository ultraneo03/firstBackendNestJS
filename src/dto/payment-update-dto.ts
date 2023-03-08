import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsInt } from "class-validator";

/* This class is used to update the status of a payment */
export class PaymentUpdateDto {
    @IsInt()
    @ApiProperty()
    id : number;

    @IsInt()
    @ApiProperty()
    status: number;

    @IsDateString()
    @ApiProperty()
    finishDate: Date;

    @ApiProperty()
    infoTransaction: string;
}
