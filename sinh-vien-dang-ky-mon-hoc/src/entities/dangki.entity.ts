import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Monhoc } from './monhoc.entity.js';
import { Sinhvien } from './sinhvien.entity.js';

@Entity({ name: 'dangki' })
@Index(['sinhVien', 'monHoc'], { unique: true })
export class Dangki {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Sinhvien, (sinhvien) => sinhvien.dangKiMonHoc, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'sinh_vien_id' })
  sinhVien: Sinhvien;

  @ManyToOne(() => Monhoc, (monhoc) => monhoc.sinhVienDangKy, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'mon_hoc_id' })
  monHoc: Monhoc;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  ngàyDangKy: string;

  @Column({ type: 'boolean', default: false })
  daHoc: boolean;
}
