import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { CreateManagerInputModel } from './models/input/create.manager.input-model';
import { CommandBus } from '@nestjs/cqrs';
import { CreateManagerCommand } from '../application/useCases/create.manager.use-case';
import { CreateManagerViewModel } from './models/view/create.manager.view-model';
import { UpdateManagerFullnameInputModel } from './models/input/update.manager.fullname.input-model';
import { UpdateManagerFullnameCommand } from '../application/useCases/update.manager.fullname.use-case';

@Controller('users')
export class ManagersController {
	constructor(private readonly commandBus: CommandBus) {}

	@Post('manager')
	async createManager(@Body() dto: CreateManagerInputModel): Promise<CreateManagerViewModel> {
		return await this.commandBus.execute(new CreateManagerCommand(dto));
	}

	@Put('manager/:id')
	async updateManagerFullname(@Param('id') id: string, @Body() dto: UpdateManagerFullnameInputModel) {
		return await this.commandBus.execute(new UpdateManagerFullnameCommand(id, dto));
	}
}
