import { Controller, Body, Post, Delete, Param } from '@nestjs/common';
import { CreateGroupInputModel } from './models/input/create.group.input-model';
import { CommandBus } from '@nestjs/cqrs';
import { CreateGroupCommand } from '../application/useCases/create.group.use-case';
import { CreateGroupViewModel } from './models/view/create.group.view-model';
import { DeleteGroupCommand } from '../application/useCases/delete.group.use-case';

@Controller('groups')
export class GroupController {
	constructor(private readonly commandBus: CommandBus) {}
	@Post()
	async createGroup(@Body() dto: CreateGroupInputModel): Promise<CreateGroupViewModel> {
		return await this.commandBus.execute(new CreateGroupCommand(dto));
	}

	@Delete(':id')
	async deleteGroup(@Param('id') id: string): Promise<void> {
		return await this.commandBus.execute(new DeleteGroupCommand(id));
	}
}
