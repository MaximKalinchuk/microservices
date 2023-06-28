import { QueueDeclaration } from '@amqp/amqp-contracts/shared/queue-declaration.interface';
import { AmqpBaseRequest } from '@amqp/amqp-contracts/shared/amqp-base-request.interface';
import { AmqpBaseResponse } from '@amqp/amqp-contracts/shared/amqp-base-response.interface';
import { CreateGroupRequest, CreateGroupResponse } from './interface';
import { EXCHANGE_MANAGER_PANEL } from '../exchanges/manager-panel.exchanges';

export namespace CreateGroupReadServiceContract {
	export const queue: QueueDeclaration = {
		exchange: EXCHANGE_MANAGER_PANEL,
		routingKey: `${EXCHANGE_MANAGER_PANEL.name}-create.group`,
		queue: `${EXCHANGE_MANAGER_PANEL.name}-create.group.read-service`,
		queueOptions: {
			durable: true,
		},
	};

	export type request = AmqpBaseRequest<CreateGroupRequest>;

	export type response = AmqpBaseResponse<CreateGroupResponse>;
}
