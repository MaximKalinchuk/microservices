import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGroupInputModel {
	@IsString()
	@IsNotEmpty()
	groupName: string;
}
