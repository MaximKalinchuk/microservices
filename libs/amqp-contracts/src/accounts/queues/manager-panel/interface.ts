import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGroupRequest {
	@IsString()
	@IsNotEmpty()
	readonly groupName: string;
}

export class CreateGroupResponse {}
