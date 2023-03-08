import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsNumberString } from "class-validator";

/* It's a class that contains properties that are used to create a new travel */
export class TravelDto {
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    riderId: number;

    @IsNotEmpty()
    @ApiProperty()
    latitudeStart: string;

    @IsNotEmpty()
    @ApiProperty()
    longitudeStart: string;

    @IsNotEmpty()
    @ApiProperty()
    AddressStart: string;

    @IsNotEmpty()
    @ApiProperty()
    latitudeEnd: string;

    @IsNotEmpty()
    @ApiProperty()
    longitudeEnd: string;

    @IsNotEmpty()
    @ApiProperty()
    AddressEnd: string;
    
    @IsInt()
    @ApiProperty()
    status: number;
}
