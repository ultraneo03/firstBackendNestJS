import { Controller, Get } from '@nestjs/common';
import { RiderDto } from 'src/dto/rider-dto';
import { RidersService } from 'src/services/riders.service';
import { Query } from '@nestjs/common/decorators';

@Controller('rider')
export class RiderController {
    constructor(private readonly riderService: RidersService) {}

    @Get('rider')
    public async getRiderInfo(@Query('username') userName: string, @Query('password') passWord: string) {
        const rider: RiderDto = { id: 0, username: userName, password:passWord};
        return await this.riderService.getRiderByUsernameAndPassword(rider);
    }
}
