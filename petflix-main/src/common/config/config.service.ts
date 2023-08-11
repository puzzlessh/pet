import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv';

export class ConfigService {
	private readonly config: DotenvParseOutput;

	constructor() {
		const result: DotenvConfigOutput = config();

		if (result.error) {
			console.error('Failed to read .env file or is missing');
			throw result.error;
		} else {
			this.config = result.parsed as DotenvParseOutput;
			console.log('Successfully read .env file');
		}
	}

	get(key: string): string {
		return this.config[key];
	}
}

export const configService = new ConfigService();
