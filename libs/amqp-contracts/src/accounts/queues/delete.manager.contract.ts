import { QueueDeclaration } from '@amqp/amqp-contracts/shared/queue-declaration.interface';
import { EXCHANGE_ACCOUNT } from '../exchanges/accounts.exchanges';
import { AmqpBaseRequest } from '@amqp/amqp-contracts/shared/amqp-base-request.interface';
import { AmqpBaseResponse } from '@amqp/amqp-contracts/shared/amqp-base-response.interface';
import { DeletManagerRequest, DeletManagerResponse } from './interface';

export namespace DeletManagerContract {
	export const queueManagerPanel: QueueDeclaration = {
		exchange: EXCHANGE_ACCOUNT,
		routingKey: `${EXCHANGE_ACCOUNT.name}-delete.manager`,
		queue: `${EXCHANGE_ACCOUNT.name}-delete.manager.manager-panel`,
		queueOptions: {
			durable: true,
		},
	};

	export const queueReadService: QueueDeclaration = {
		exchange: EXCHANGE_ACCOUNT,
		routingKey: `${EXCHANGE_ACCOUNT.name}-delete.manager`,
		queue: `${EXCHANGE_ACCOUNT.name}-delete.manager.read-service`,
		queueOptions: {
			durable: true,
		},
	};

	export type request = AmqpBaseRequest<DeletManagerRequest>;

	export type response = AmqpBaseResponse<DeletManagerResponse>;
}
