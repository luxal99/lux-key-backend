import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CarModel } from "../car-model/CarModel";

@Entity("car_brand", { schema: "lux_key" })
export class CarBrand {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

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

  @OneToMany(() => CarModel, (carModel) => carModel.idCarBrand2)
  carModels: CarModel[];
}
