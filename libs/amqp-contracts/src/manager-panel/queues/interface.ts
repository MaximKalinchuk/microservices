import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGroupRequest {
	@IsString()
	@IsNotEmpty()
	readonly id: string;
	@IsString()
	@IsNotEmpty()
	readonly groupName: string;
	@IsString()
	@IsNotEmpty()
	readonly managerFullName: string;
	@IsString()
	@IsNotEmpty()
	readonly creatorId: string;
}

export class CreateGroupResponse {}
