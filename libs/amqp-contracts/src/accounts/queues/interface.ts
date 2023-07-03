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
	readonly passwordHash: string;
	@IsString()
	@IsNotEmpty()
	readonly fullName: string;
	@IsString()
	@IsNotEmpty()
	readonly created_At: string;
	@IsString()
	@IsNotEmpty()
	readonly updated_At: string;
	@IsNotEmpty()
	readonly deleted_At: string | null;
}

export class CreateManagerResponse {}

export class UpdateManagerFullnameRequest {
	@IsString()
	@IsNotEmpty()
	readonly id: string;
	@IsString()
	@IsNotEmpty()
	readonly fullName: string;
}

export class UpdateManagerFullnameResponse {}

export class DeletManagerRequest {
	@IsString()
	@IsNotEmpty()
	id: string;
}

export class DeletManagerResponse {}
