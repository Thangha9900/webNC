import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dangki } from './dangki.entity.js';

@Entity({ name: 'monhoc' })
export class Monhoc {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  maMonHoc: string;

  @Column({ type: 'varchar', length: 150 })
  tenMonHoc: string;

  @Column({ type: 'int', default: 3 })
  soTinChi: number;

  @OneToMany(() => Dangki, (dangki) => dangki.monHoc, { cascade: true })
  sinhVienDangKy: Dangki[];
}
