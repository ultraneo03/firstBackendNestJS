import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

/* This class is used to create a new driver */
export class DriverDto {
    
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @ApiProperty()
    lastname: string;

    @ApiProperty()
    createDate: Date;

    @IsNotEmpty()
    @ApiProperty()
    document: string;

    @IsNotEmpty()
    @ApiProperty()
    vehicleRegistration: string;

    @IsNotEmpty()
    @ApiProperty()
    vehicleModel: string;

    @IsNotEmpty()
    @ApiProperty()
    vehicleColor: string;

    @ApiProperty()
    available: boolean;

    @ApiProperty()
    isWorking: boolean;

    @ApiProperty()
    longitude: string;

    @ApiProperty()
    latitude: string;
}
