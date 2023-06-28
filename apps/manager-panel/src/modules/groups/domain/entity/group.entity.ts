import { Entity, Column } from 'typeorm';
import { CreateGroupInputModel } from '../../api/models/input/create.group.input-model';
import { randomUUID } from 'crypto';
import { BaseEntity } from '@class/classes/entities';

@Entity('groups')
export class GroupEntity extends BaseEntity {
	@Column()
	groupName: string;

	@Column()
	managerFullName: string;

	@Column()
	creatorId: string;

	static create(dto: CreateGroupInputModel, managerFullName: string) {
		const newGroup = new GroupEntity();
		newGroup.id = randomUUID();
		newGroup.creatorId = dto.creatorId;
		newGroup.groupName = dto.groupName;
		newGroup.managerFullName = managerFullName;
		return newGroup;
	}
}
