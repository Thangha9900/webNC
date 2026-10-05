import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dangki } from './dangki.entity.js';

@Entity({ name: 'sinhvien' })
export class Sinhvien {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  maSinhVien: string;

  @Column({ type: 'varchar', length: 100 })
  hoTen: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email?: string;

  @Column({ type: 'date', nullable: true })
  ngaySinh?: string;

  @OneToMany(() => Dangki, (dangki) => dangki.sinhVien, { cascade: true })
  dangKiMonHoc: Dangki[];
}
