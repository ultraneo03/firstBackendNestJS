import { Body, Controller, Get,  HttpStatus,  Post, Put } from '@nestjs/common';
import { Query, Res } from '@nestjs/common/decorators';
import { TravelDto } from 'src/dto/travel-dto';
import { TravelUpdateDto } from 'src/dto/travel-update-dto';
import { TravelsService } from 'src/services/travels.service';

@Controller('travel')
export class TravelController {
    constructor(private readonly travelService: TravelsService) {}

    @Get('ByID')
    public async getByID(@Query('travelId') travelId: number) {
        return await this.travelService.getTravelByID(travelId);
    }

    @Get('ByRider')
    public async getByRider(@Query('riderId') riderId: number) {
        return await this.travelService.getTravelsByRider(riderId);
    }

    @Get('ByDriver')
    public async getByDriver(@Query('driverId') driverId: number) {
        return await this.travelService.getTravelsByDriver(driverId);
    }

    @Get('Available')
    public async getAvailables() {
        return await this.travelService.getTravelAvailables();
    }

    @Post()
    public async newTravel(@Body() newTravel: TravelDto, @Res() response ) {
        await this.travelService.createTravel(newTravel)
        .then(travel => { response.status(HttpStatus.CREATED).json(travel) })
        .catch(
            (error) => {
                response.status(HttpStatus.FORBIDDEN).json({message:'Se presento un error en la creacion'+error.message})
            }
        );
    }

    @Get('totalTravel')
    public async getTotalTravel(@Query('travelId') travelId: number) {
        return await this.travelService.getTravelTotals(travelId);
    }

    @Put()
    public async updateTravel(@Body() updateTravel: TravelUpdateDto) {
        return await this.travelService.updateEndTravel(updateTravel);
    }

    @Put()
    public async updateStatusTravel(@Body() updateTravel: TravelUpdateDto) {
        return await this.travelService.updateStatusTravel(updateTravel);
    }
}
