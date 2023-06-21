import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { GroupEntity } from '../domain/entity/group.entity';

@Injectable()
export class GroupQueryRepository {
	constructor(@InjectRepository(GroupEntity) private readonly groupQueryRepository: Repository<GroupEntity>) {}
}
