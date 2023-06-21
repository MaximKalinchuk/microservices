import { BaseRepository } from '@class/classes/base.repository.abstract.class';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupEntity } from '../domain/entity/group.entity';

@Injectable()
export class GroupRepository extends BaseRepository<GroupEntity> {
	constructor(
		@InjectRepository(GroupEntity)
		private readonly groupRepository: Repository<GroupEntity>,
	) {
		super(groupRepository);
	}
}
