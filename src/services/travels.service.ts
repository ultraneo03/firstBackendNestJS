import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TravelDto } from 'src/dto/travel-dto';
import { TravelTotalDto } from 'src/dto/travel-total-dto';
import { TravelUpdateDto } from 'src/dto/travel-update-dto';
import { Rider } from 'src/entities/rider.entity';
import { Travel } from 'src/entities/travel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TravelsService {

    constructor(
        @InjectRepository(Travel)
        private readonly travelRepository: Repository<Travel>) {}
    
    /**
     * It returns a list of travels that have the riderId passed as a parameter
     * @param {number} riderId - number
     * @returns An array of Travel objects
     */
    async getTravelsByRider(riderId: number){
        return await this.travelRepository.find({where: {riderId: riderId}});
    }
    
    /**
     * This function is an asynchronous function that returns a promise of an array of travel objects
     * @param {number} travelId - number - This is the ID of the travel that we want to get.
     * @returns The travel object with the given id.
     */
    async getTravelByID(travelId: number){
        return await this.travelRepository.find({where: {id: travelId}});
    }

    /**
     * It returns a list of travel objects that have the same driverId as the driverId passed in as a
     * parameter
     * @param {number} driverId - number
     * @returns An array of travel objects
     */
    async getTravelsByDriver(driverId: number){
        return await this.travelRepository.find({where: {driverId: driverId}});
    }

    /**
     * It returns a list of travels that are available to be taken by a driver
     * @returns The travelRepository is being returned.
     */
    async getTravelAvailables(){
        return await this.travelRepository.find({where: {driverId: null, status: 0}});
    }

    async getTravelTotals(travelId: number){
        const travel = await this.travelRepository.findOne({where: {id: travelId}});

        const travelTotal = new TravelTotalDto();  
        
        travelTotal.subtotalDistance = travel.distanceTotal * 1000;
        travelTotal.subtotalTime = travel.timeTotal * 200;
        travelTotal.subtotalTax = 3500;
        travelTotal.totalTravel = travelTotal.subtotalDistance+ travelTotal.subtotalTime+travelTotal.subtotalTax;
        travelTotal.travelId;

        return travelTotal;
    }

    /**
     * It creates a new record in the database using the data provided by the user
     * @param {TravelDto} newTravel - TravelDto
     * @returns The new record is being returned.
     */
    async createTravel(newTravel: TravelDto){
        const newRecord = new Travel();

        newRecord.riderId = newTravel.riderId;
        newRecord.latitudeStart = newTravel.latitudeStart;
        newRecord.longitudeStart = newTravel.longitudeStart;
        newRecord.AddressStart = newTravel.AddressStart;
        newRecord.status = newTravel.status;
        newRecord.distanceTotal = 0;
        newRecord.timeTotal = 0;

        return this.travelRepository.save(newRecord);
    }

    /**
     * It takes a TravelUpdateDto object as a parameter, finds the travel with the same id as the one
     * in the parameter, updates the travel with the new values, and saves the updated travel
     * @param {TravelUpdateDto} updatedDriver - TravelUpdateDto - this is the object that will be
     * passed to the function.
     * @returns The updated driver.
     */
    async updateEndTravel(updatedDriver: TravelUpdateDto){
        
        const driverToUpdate: TravelUpdateDto = await this.travelRepository.findOneBy({id: updatedDriver.id});
        
        driverToUpdate.distanceTotal = updatedDriver.distanceTotal;
        driverToUpdate.timeTotal = updatedDriver.timeTotal;
        driverToUpdate.status = updatedDriver.status;
        driverToUpdate.finishDate = updatedDriver.finishDate;
        
        return this.travelRepository.save(driverToUpdate);
    }

    /**
     * It finds a driver by id, updates the status of the driver, and then saves the driver
     * @param {TravelUpdateDto} updatedDriver - TravelUpdateDto - this is the object that we will be
     * updating.
     * @returns The updated driver
     */
    async updateStatusTravel(updatedDriver: TravelUpdateDto){
        
        const driverToUpdate: TravelUpdateDto = await this.travelRepository.findOneBy({id: updatedDriver.id});
        
        driverToUpdate.status = updatedDriver.status;
        
        return this.travelRepository.save(driverToUpdate);
    }
}
