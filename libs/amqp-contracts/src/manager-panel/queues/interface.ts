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
	@IsString()
	@IsNotEmpty()
	readonly created_At: string;
	@IsString()
	@IsNotEmpty()
	readonly updated_At: string;
	@IsString()
	@IsNotEmpty()
	readonly deleted_At: string;
}

export class CreateGroupResponse {}

export class DeleteGroupRequest {
	@IsString()
	@IsNotEmpty()
	readonly id: string;
}

export class DeleteGroupResponse {}
