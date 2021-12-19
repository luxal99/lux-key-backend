import { EntityRepository, Repository } from 'typeorm';
import { Report } from './Report';

@EntityRepository(Report)
export class ReportRepository extends Repository<Report> {}
