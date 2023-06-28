import { QueueDeclaration } from '@amqp/amqp-contracts/shared/queue-declaration.interface';
import { EXCHANGE_ACCOUNT } from '../exchanges/accounts.exchanges';
import { AmqpBaseRequest } from '@amqp/amqp-contracts/shared/amqp-base-request.interface';
import { AmqpBaseResponse } from '@amqp/amqp-contracts/shared/amqp-base-response.interface';
import { UpdateManagerFullnameRequest, UpdateManagerFullnameResponse } from './interface';

export namespace UpdateManagerFullnameManagerPanelContract {
	export const queue: QueueDeclaration = {
		exchange: EXCHANGE_ACCOUNT,
		routingKey: `${EXCHANGE_ACCOUNT.name}-update.manager.fullname`,
		queue: `${EXCHANGE_ACCOUNT.name}-update.manager.fullname.manager-panel`,
		queueOptions: {
			durable: true,
		},
	};

	export type request = AmqpBaseRequest<UpdateManagerFullnameRequest>;

	export type response = AmqpBaseResponse<UpdateManagerFullnameResponse>;
}

export namespace UpdateManagerFullnameReadServiceContract {
	export const queue: QueueDeclaration = {
		exchange: EXCHANGE_ACCOUNT,
		routingKey: `${EXCHANGE_ACCOUNT.name}-update.manager.fullname`,
		queue: `${EXCHANGE_ACCOUNT.name}-update.manager.fullname.read-service`,
		queueOptions: {
			durable: true,
		},
	};

	export type request = AmqpBaseRequest<UpdateManagerFullnameRequest>;

	export type response = AmqpBaseResponse<UpdateManagerFullnameResponse>;
}
