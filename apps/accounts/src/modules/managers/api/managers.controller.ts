import { Body, Controller, Post } from '@nestjs/common';
import { CreateManagerInputModel } from './models/input/create.manager.input-model';
import { CommandBus } from '@nestjs/cqrs';
import { CreateManagerCommand } from '../application/useCases/create.manager.use-case';

@Controller('users')
export class ManagersController {
	constructor(private readonly commandBus: CommandBus) {}

	@Post('manager')
	async createManager(@Body() dto: CreateManagerInputModel) {
		await this.commandBus.execute(new CreateManagerCommand(dto));
	}
}
