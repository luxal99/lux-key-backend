import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Service } from "../service/Service";
import { Key } from "../key/Key";

@Index("id_service", ["idService"], {})
@Index("id_key", ["idKey"], {})
@Entity("service_key", { schema: "lux_key" })
export class ServiceKey {
  @Column("int", { name: "id_service" })
  idService: number;

  @Column("int", { name: "id_key" })
  idKey: number;

  @Column("double", { name: "key_price", precision: 22 })
  keyPrice: number;

  @ManyToOne(() => Service, (service) => service.serviceKeys, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_service", referencedColumnName: "id" }])
  idService2: Service;

  @ManyToOne(() => Key, (key) => key.serviceKeys, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_key", referencedColumnName: "id" }])
  idKey2: Key;
}
