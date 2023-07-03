import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGroupInputModel {
	readonly id: string;
	readonly groupName: string;
	readonly managerFullName: string;
	readonly creatorId: string;
	readonly created_At: string;
	readonly updated_At: string;
	readonly deleted_At: string;
}
