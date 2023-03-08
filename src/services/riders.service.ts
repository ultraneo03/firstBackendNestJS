import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RiderDto } from 'src/dto/rider-dto';
import { Rider } from 'src/entities/rider.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RidersService {

    constructor(
        @InjectRepository(Rider)
        private readonly riderRepository: Repository<Rider>) {}
    
    /**
     * This function is used to get a rider by username and password
     * @param {RiderDto} riderData - RiderDto - This is the data that is passed to the function.
     * @returns The rider object
     */
    async getRiderByUsernameAndPassword(riderData: RiderDto){

        return await this.riderRepository.find({where: {username: riderData.username, password: riderData.password}});
    }
}
