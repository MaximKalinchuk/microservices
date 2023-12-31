import { QueueDeclaration } from '@amqp/amqp-contracts/shared/queue-declaration.interface';
import { AmqpBaseRequest } from '@amqp/amqp-contracts/shared/amqp-base-request.interface';
import { AmqpBaseResponse } from '@amqp/amqp-contracts/shared/amqp-base-response.interface';
import { CreateManagerRequest, CreateManagerResponse } from './interface';
import { EXCHANGE_ACCOUNT } from '../exchanges/accounts.exchanges';

export namespace CreateManagerContract {
	export const queueManagerPanel: QueueDeclaration = {
		exchange: EXCHANGE_ACCOUNT,
		routingKey: `${EXCHANGE_ACCOUNT.name}-create.manager`,
		queue: `${EXCHANGE_ACCOUNT.name}-create.manager.manager-panel`,
		queueOptions: {
			durable: true,
		},
	};

	export const queueReadService: QueueDeclaration = {
		exchange: EXCHANGE_ACCOUNT,
		routingKey: `${EXCHANGE_ACCOUNT.name}-create.manager`,
		queue: `${EXCHANGE_ACCOUNT.name}-create.manager.read-service`,
		queueOptions: {
			durable: true,
		},
	};

	export type request = AmqpBaseRequest<CreateManagerRequest>;

	export type response = AmqpBaseResponse<CreateManagerResponse>;
}
