import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

/* The RiderDto class is a data transfer object (DTO) that contains the id, username, and password of a
rider */
export class RiderDto {
    id: number;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}
