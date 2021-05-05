import { EntityRepository, Repository } from 'typeorm';
import { CarModel } from './CarModel';

@EntityRepository(CarModel)
export class CarModelRepository extends Repository<CarModel> {

}
