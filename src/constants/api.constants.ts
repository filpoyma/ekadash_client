import { isProd } from './platform.constants';

export const API_URL = isProd ? process.env.API_URL_PROD! : process.env.API_URL_DEV!;
