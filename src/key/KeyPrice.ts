import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Key } from "./Key";

@Index("id_key", ["idKey"], {})
@Entity("key_price", { schema: "lux_key" })
export class KeyPrice {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("double", { name: "price", nullable: true, precision: 22 })
  price: number | null;

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

  @Column("int", { name: "id_key", nullable: true })
  idKey: number | null;

  @OneToMany(() => Key, (key) => key.idCurrentPrice2)
  keys: Key[];

  @ManyToOne(() => Key, (key) => key.keyPrices, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_key", referencedColumnName: "id" }])
  idKey2: Key;
}
