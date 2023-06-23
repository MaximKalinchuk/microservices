import { IsNotEmpty, IsString } from 'class-validator';

export class CreateManagerRequest {
	@IsString()
	@IsNotEmpty()
	readonly id: string;
	@IsString()
	@IsNotEmpty()
	readonly email: string;
	@IsString()
	@IsNotEmpty()
	readonly password: string;
	@IsString()
	@IsNotEmpty()
	readonly fullName: string;
}

export class CreateManagerResponse {}
