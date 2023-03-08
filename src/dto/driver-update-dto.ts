import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsNumberString } from "class-validator";

/* This class is used to update a driver's availability and location */
export class DriverUpdateDto {
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    id: number;
    
    @IsBoolean()
    @ApiProperty()
    available: boolean;

    @IsBoolean()
    @ApiProperty()
    isWorking: boolean;

    @IsNotEmpty()
    @ApiProperty()
    longitude: string;

    @IsNotEmpty()
    @ApiProperty()
    latitude: string;
}
