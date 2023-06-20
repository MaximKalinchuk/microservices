import { BaseEntity } from '@class/classes/base.entity.abstract.class';
import { Column, Entity } from 'typeorm';
import { CreateManagerInputModel } from '../../api/models/input/create.manager.input-model';
import { randomUUID } from 'crypto';

@Entity('managers')
export class ManagersEntity extends BaseEntity {
	@Column()
	email: string;
	@Column()
	password: string;
	@Column()
	fullName: string;

	static create(dto: CreateManagerInputModel) {
		const newManager = new ManagersEntity();
		newManager.id = randomUUID();
		newManager.email = dto.email;
		newManager.password = dto.password;
		newManager.fullName = dto.fullName;
		return newManager;
	}
}
