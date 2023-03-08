import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumberString } from "class-validator";

/* The PaymentDto class is a data transfer object (DTO) that contains the data that is sent to the
client */
export class PaymentDto {
    @IsNumberString()
    @ApiProperty()
    subTotalTime: number;

    @IsNumberString()
    @ApiProperty()
    subTotalDistance: number;

    @IsNumberString()
    @ApiProperty()
    tax: number;    
    
    @IsNumberString()
    @ApiProperty()
    total: number;
    
    @IsInt()
    @ApiProperty()
    status: number;
    @IsInt()
    @ApiProperty()
    travelId: number;
}
