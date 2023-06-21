import { BaseEntity } from '@class/classes/base.entity.abstract.class';
import { Entity, Column } from 'typeorm';
import { CreateGroupInputModel } from '../../api/models/input/create.group.input-model';
import { randomUUID } from 'crypto';

@Entity('groups')
export class GroupEntity extends BaseEntity {
	@Column()
	groupName: string;

	@Column()
	managerFullName: string;

	static create(dto: CreateGroupInputModel) {
		const newGroup = new GroupEntity();
		newGroup.id = randomUUID();
		newGroup.groupName = dto.groupName;
		newGroup.managerFullName = '';
		return newGroup;
	}
}
