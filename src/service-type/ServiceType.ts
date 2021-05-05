import { Column, Entity } from "typeorm";
import { Base } from '../generic/base.entity';

@Entity("service_type", { schema: "lux_key" })
export class ServiceType  extends Base {

  @Column("varchar", { name: "name", length: 64 })
  name: string;

  @Column("timestamp", {
    name: "created_date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdDate: Date | null;

  @Column("timestamp", {
    name: "last_modified_date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  lastModifiedDate: Date | null;
}
