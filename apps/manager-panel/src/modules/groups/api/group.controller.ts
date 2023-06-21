import { Controller, Body, Post } from '@nestjs/common';
import { CreateGroupInputModel } from './models/input/create.group.input-model';
import { CommandBus } from '@nestjs/cqrs';
import { CreateGroupCommand } from '../application/useCases/create.group.use-case';

@Controller('groups')
export class GroupController {
	constructor(private readonly commandBus: CommandBus) {}
	@Post()
	async createGroup(@Body() dto: CreateGroupInputModel) {
		await this.commandBus.execute(new CreateGroupCommand(dto));
	}
}
