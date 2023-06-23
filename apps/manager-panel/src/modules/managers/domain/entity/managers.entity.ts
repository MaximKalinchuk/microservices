import { Column, Entity, BeforeInsert } from 'typeorm';
import { CreateManagerInputModel } from '../../api/models/input/create.manager.input-model';
import { randomUUID } from 'crypto';
import { hash } from 'bcrypt';
import { BaseEntity } from '@class/classes/entities';

@Entity('managers')
export class ManagersEntity extends BaseEntity {
	@Column()
	email: string;
	@Column()
	passwordHash: string;
	@Column()
	fullName: string;

	@BeforeInsert()
	async hashPassword(): Promise<void> {
		this.passwordHash = await hash(this.passwordHash, 10);
	}
	static create(dto: CreateManagerInputModel) {
		const newManager = new ManagersEntity();
		newManager.id = randomUUID();
		newManager.email = dto.email;
		newManager.passwordHash = dto.password;
		newManager.fullName = dto.fullName;
		return newManager;
	}
}
