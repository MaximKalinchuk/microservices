import { IsNotEmpty, IsString } from 'class-validator';

export class CreateManagerInputModel {
	@IsString()
	@IsNotEmpty()
	readonly id: string;
	@IsString()
	@IsNotEmpty()
	readonly email: string;
	@IsString()
	@IsNotEmpty()
	readonly passwordHash: string;
	@IsString()
	@IsNotEmpty()
	readonly fullName: string;
}
