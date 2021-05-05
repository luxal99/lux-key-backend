import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ServiceKey } from "../service-key/ServiceKey";

@Entity("service", { schema: "lux_key" })
export class Service {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("date", { name: "date" })
  date: string;

  @Column("double", {
    name: "coding_service_price",
    nullable: true,
    precision: 22,
  })
  codingServicePrice: number | null;

  @Column("double", { name: "gross", precision: 22 })
  gross: number;

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

  @OneToMany(() => ServiceKey, (serviceKey) => serviceKey.idService2)
  serviceKeys: ServiceKey[];
}
