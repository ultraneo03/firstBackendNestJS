import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DriverDto } from 'src/dto/driver-dto';
import { DriverUpdateDto } from 'src/dto/driver-update-dto';
import { Driver } from 'src/entities/driver.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DriversService {
    constructor(
        @InjectRepository(Driver)
        private readonly driverRepository: Repository<Driver>) {}

   /**
    * It returns a promise that resolves to an array of all the drivers in the database
    * @returns An array of all the drivers in the database.
    */
    async getAll(){
        return await this.driverRepository.find();
    }

    /**
     * It returns a list of drivers that are available and not working
     * @returns An array of drivers that are available and not working.
     */
    async getAvailables(){
        return await this.driverRepository.find({where: {available: true, isWorking: false}});
    }

    /**
     * We create a new instance of the Driver class, we assign the values of the newDriver object to
     * the newRecord object, and then we save the newRecord object to the database
     * @param {DriverDto} newDriver - DriverDto
     * @returns The new record created.
     */
    async createDriver(newDriver: DriverDto){
        const newRecord = new Driver();

        newRecord.name = newDriver.name;
        newRecord.lastname = newDriver.lastname;
        newRecord.document = newDriver.document;
        newRecord.vehicleModel = newDriver.vehicleModel;
        newRecord.vehicleColor = newDriver.vehicleColor;
        newRecord.vehicleRegistration = newDriver.vehicleRegistration;
        newRecord.vehicleRegistration = newDriver.vehicleRegistration;
        newRecord.available = newDriver.available;
        newRecord.isWorking = newDriver.isWorking;
        newRecord.latitude = newDriver.latitude;
        newRecord.longitude = newDriver.longitude;

        return this.driverRepository.save(newRecord);
    }

    /**
     * It takes a DriverUpdateDto object, finds the driver in the database with the same id, and
     * updates the driver's available, isWorking, longitude, and latitude properties with the values
     * from the DriverUpdateDto object
     * @param {DriverUpdateDto} updatedDriver - DriverUpdateDto
     * @returns The updated driver.
     */
    async updateStatusDriver(updatedDriver: DriverUpdateDto){
        
        const driverToUpdate: Driver = await this.driverRepository.findOneBy({id: updatedDriver.id});
        
        driverToUpdate.available = updatedDriver.available;
        driverToUpdate.isWorking = updatedDriver.isWorking;
        driverToUpdate.longitude = updatedDriver.longitude;
        driverToUpdate.latitude = updatedDriver.latitude;
        
        return this.driverRepository.save(driverToUpdate);
    }
}
