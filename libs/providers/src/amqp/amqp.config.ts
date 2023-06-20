import { RabbitMQConfig, RabbitMQExchangeConfig } from '@golevelup/nestjs-rabbitmq';
import { ConfigService } from '@nestjs/config';

const AMQP_EXCHANGES: RabbitMQExchangeConfig[] = [
	{
		name: 'accounts',
		type: 'direct',
	},
];

export const amqpConfig = (configService: ConfigService): RabbitMQConfig => {
	const uri = configService.get('AMQP_URI');
	if (!uri) {
		throw new Error('"AMQP_URI" не найдет. Проверьте .env файл');
	}
	return {
		exchanges: AMQP_EXCHANGES,
		uri,
		connectionInitOptions: { wait: false },
		connectionManagerOptions: {
			heartbeatIntervalInSeconds: 15,
			reconnectTimeInSeconds: 30,
		},
	};
};
