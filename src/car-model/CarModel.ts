import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CarBrand } from "../car-brand/CarBrand";

@Index("id_car_brand", ["idCarBrand"], {})
@Entity("car_model", { schema: "lux_key" })
export class CarModel {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 64 })
  name: string;

  @Column("int", { name: "id_car_brand" })
  idCarBrand: number;

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

  @ManyToOne(() => CarBrand, (carBrand) => carBrand.carModels, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_car_brand", referencedColumnName: "id" }])
  idCarBrand2: CarBrand;
}
