import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateManagerFullnameInputModel {
	@IsString()
	@IsNotEmpty()
	readonly fullName: string;
}
