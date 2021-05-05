import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { KeyPrice } from "./KeyPrice";
import { ServiceKey } from "../service-key/ServiceKey";

@Index("code", ["code"], { unique: true })
@Index("id_current_price", ["idCurrentPrice"], {})
@Entity("key", { schema: "lux_key" })
export class Key {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 64 })
  name: string;

  @Column("int", { name: "amount", nullable: true })
  amount: number | null;

  @Column("varchar", { name: "code", unique: true, length: 64 })
  code: string;

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

  @Column("int", { name: "id_current_price", nullable: true })
  idCurrentPrice: number | null;

  @ManyToOne(() => KeyPrice, (keyPrice) => keyPrice.keys, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_current_price", referencedColumnName: "id" }])
  idCurrentPrice2: KeyPrice;

  @OneToMany(() => KeyPrice, (keyPrice) => keyPrice.idKey2)
  keyPrices: KeyPrice[];

  @OneToMany(() => ServiceKey, (serviceKey) => serviceKey.idKey2)
  serviceKeys: ServiceKey[];
}
