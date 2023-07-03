import { QueueDeclaration } from '@amqp/amqp-contracts/shared/queue-declaration.interface';
import { EXCHANGE_MANAGER_PANEL } from '../exchanges/manager-panel.exchanges';
import { AmqpBaseRequest } from '@amqp/amqp-contracts/shared/amqp-base-request.interface';
import { AmqpBaseResponse } from '@amqp/amqp-contracts/shared/amqp-base-response.interface';
import { DeleteGroupRequest, DeleteGroupResponse } from './interface';

export namespace DeleteGroupReadServiceContract {
	export const queue: QueueDeclaration = {
		exchange: EXCHANGE_MANAGER_PANEL,
		routingKey: `${EXCHANGE_MANAGER_PANEL.name}-delete.group`,
		queue: `${EXCHANGE_MANAGER_PANEL.name}-delete.group.read-service`,
		queueOptions: {
			durable: true,
		},
	};

	export type request = AmqpBaseRequest<DeleteGroupRequest>;

	export type response = AmqpBaseResponse<DeleteGroupResponse>;
}
