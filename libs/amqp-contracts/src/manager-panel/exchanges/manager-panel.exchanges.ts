import { RabbitExchangeConfig } from '@amqp/amqp-contracts/shared/rabbit-exchange-config.interface';

export const EXCHANGE_MANAGER_PANEL: RabbitExchangeConfig = {
	name: 'manager-panel',
	type: 'topic',
};
