import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGroupInputModel {
	readonly id: string;
	readonly groupName: string;
	readonly managerFullName: string;
	readonly creatorId: string;
}
