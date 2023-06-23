import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupEntity } from '../domain/entity/group.entity';
import { BaseRepository } from '@class/classes/entities';

@Injectable()
export class GroupRepository extends BaseRepository<GroupEntity> {
	constructor(
		@InjectRepository(GroupEntity)
		private readonly groupRepository: Repository<GroupEntity>,
	) {
		super(groupRepository);
	}
}
