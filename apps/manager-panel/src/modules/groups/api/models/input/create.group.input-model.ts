import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGroupInputModel {
	@IsString()
	@IsNotEmpty()
	creatorId: string;
	@IsString()
	@IsNotEmpty()
	groupName: string;
}
