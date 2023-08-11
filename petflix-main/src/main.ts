import { createApplication } from './app';
import { prismaService } from './common/database/prisma.service';

async function bootstrap(): Promise<void> {
	const PID = process.pid;
	const PORT = process.env.PORT || 3000;

	await prismaService.connect();
	const app = createApplication();

	app.listen(PORT, () => {
		console.log(`Server run on PORT=${PORT}; PID=${PID}`);
	});

	process.on('exit', async () => {
		await prismaService.disconnect();
	});
}

bootstrap();
