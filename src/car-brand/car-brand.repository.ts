import { EntityRepository, Repository } from 'typeorm';
import { CarBrand } from './CarBrand';

@EntityRepository(CarBrand)
export class CarBrandRepository extends Repository<CarBrand> {

}
