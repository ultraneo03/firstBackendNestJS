import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsDecimal, IsEmpty, IsInt, IsNumberString } from "class-validator";

/* It's a DTO that contains the data that is needed to update a travel */
export class TravelUpdateDto {
    @IsInt()
    @ApiProperty()
    id: number;

    @IsInt()
    @ApiProperty()
    driverId: number;

    @IsInt()
    @ApiProperty()
    status: number;

    @ApiProperty()
    finishDate: Date;

    @IsNumberString()
    @ApiProperty()
    distanceTotal: number;

    @IsNumberString()
    @ApiProperty()
    timeTotal: number;
}
