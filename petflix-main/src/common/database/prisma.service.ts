import { PrismaClient } from '@prisma/client';

export class PrismaService {
	readonly client: PrismaClient;

	constructor() {
		this.client = new PrismaClient();
	}

	async connect(): Promise<void> {
		try {
			await this.client.$connect();
			console.log('Successfully connected to the database');
		} catch (e) {
			if (e instanceof Error) {
				console.error('Error connecting to database: ' + e.message);
			}

			throw e;
		}
	}

	async disconnect(): Promise<void> {
		await this.client.$disconnect();
		console.log('Successfully disconnected from the database');
	}
}

export const prismaService = new PrismaService();
