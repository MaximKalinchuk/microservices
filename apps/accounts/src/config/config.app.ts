import { INestApplication } from '@nestjs/common';
import { pipesSetup } from './setups/pipesSetup';

export const configApp = (app: INestApplication) => {
	pipesSetup(app);
};
