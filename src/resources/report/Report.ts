import { Base } from '../../generic/base.entity';
import { Column, Entity } from 'typeorm';
import { ReportTypeEnum } from 'src/enum/ReportTypeEnum.enum';

@Entity()
export class Report extends Base {
  @Column('timestamp', {
    name: 'created_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date | null;

  @Column('varchar', { name: 'path', length: 128 })
  path: string;

  @Column({
    type: 'enum',
    enum: ReportTypeEnum,
  })
  reportType: ReportTypeEnum;

  constructor(path: string, reportType: ReportTypeEnum) {
    super();
    this.path = path;
    this.reportType = reportType;
  }
}
