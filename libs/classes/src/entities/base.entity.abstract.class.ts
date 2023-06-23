import { AggregateRoot } from '@nestjs/cqrs';
import { PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

export abstract class BaseEntity extends AggregateRoot {
  @PrimaryColumn('uuid')
  public id: string;
  @CreateDateColumn({ nullable: true })
  public created_At: Date;
  @UpdateDateColumn({ nullable: true })
  public updated_At: Date;
  @DeleteDateColumn({ nullable: true })
  public deleted_At: Date;
}
