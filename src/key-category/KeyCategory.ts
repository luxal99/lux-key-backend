import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { KeySubCategory } from "../key-sub-category/KeySubCategory";

@Entity("key_category", { schema: "lux_key" })
export class KeyCategory {
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

  @OneToMany(
    () => KeySubCategory,
    (keySubCategory) => keySubCategory.idCategory2
  )
  keySubCategories: KeySubCategory[];
}
