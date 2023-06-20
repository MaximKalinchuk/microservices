import { RabbitExchangeConfig } from '@amqp/amqp-contracts/shared/rabbit-exchange-config.interface';

export const EXCHANGE_ACCOUNT: RabbitExchangeConfig = {
	name: 'accounts',
	type: 'direct',
};
