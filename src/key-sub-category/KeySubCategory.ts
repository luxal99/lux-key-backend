import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { KeyCategory } from "../key-category/KeyCategory";

@Index("id_category", ["idCategory"], {})
@Entity("key_sub_category", { schema: "lux_key" })
export class KeySubCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 64 })
  name: string;

  @Column("int", { name: "id_category" })
  idCategory: number;

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

  @ManyToOne(() => KeyCategory, (keyCategory) => keyCategory.keySubCategories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_category", referencedColumnName: "id" }])
  idCategory2: KeyCategory;
}
