import { IsNotEmpty, IsString } from 'class-validator';

export class CreateManagerInputModel {
	readonly id: string;
	readonly email: string;
	readonly passwordHash: string;
	readonly fullName: string;
	readonly created_At: string;
	readonly updated_At: string;
	readonly deleted_At: string | null;
}
