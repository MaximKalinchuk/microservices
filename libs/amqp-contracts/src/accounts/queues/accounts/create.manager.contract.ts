import { QueueDeclaration } from '@amqp/amqp-contracts/shared/queue-declaration.interface';
import { EXCHANGE_ACCOUNT } from '../../exchanges/accounts.exchanges';
import { AmqpBaseRequest } from '@amqp/amqp-contracts/shared/amqp-base-request.interface';
import { AmqpBaseResponse } from '@amqp/amqp-contracts/shared/amqp-base-response.interface';
import { CreateManagerRequest, CreateManagerResponse } from './interface';

export namespace CreateManagerContract {
	export const queue: QueueDeclaration = {
		exchange: EXCHANGE_ACCOUNT,
		routingKey: `${EXCHANGE_ACCOUNT.name}-create.manager`,
		queue: `${EXCHANGE_ACCOUNT.name}-create.manager`,
		queueOptions: {
			durable: true,
		},
	};

	export type request = AmqpBaseRequest<CreateManagerRequest>;

	export type response = AmqpBaseResponse<CreateManagerResponse>;
}
