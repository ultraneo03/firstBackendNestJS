import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { DriverDto } from 'src/dto/driver-dto';
import { DriverUpdateDto } from 'src/dto/driver-update-dto';
import { DriversService } from 'src/services/drivers.service';

@Controller('driver')
export class DriverController {
    constructor(private readonly driverService: DriversService) {}

    @Get('All')
    public async getAll() {
        return await this.driverService.getAll();
    }

    @Get('Availables')
    public async getAvailables() {
        return await this.driverService.getAvailables();
    }

    @Post()
    public async newDriver(@Body() newDriver: DriverDto) {
        return await this.driverService.createDriver(newDriver);
    }

    @Put()
    public async updateStatusDriver(@Body() updateDriver: DriverUpdateDto) {
        return await this.driverService.updateStatusDriver(updateDriver);
    }
}
