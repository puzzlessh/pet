// import { PrismaClient, Prisma } from '@prisma/client';

// const prisma = new PrismaClient();

// const moviesData: Prisma.MovieCreateInput[] = [
// 	{
// 		title: 'title',
// 		description: 'decription',
// 		genres: ['trailer'],
// 		image: '',
// 		language: 'en',
// 		rating: 1.2,
// 		torrents: [{ some: 1 }],
// 		year: 2022,
// 	},
// ];

// async function main(): Promise<void> {
// 	console.log(`Start seeding ...`);
// 	for (const movie of moviesData) {
// 		const createdMovie = await prisma.movie.create({
// 			data: movie,
// 		});

// 		console.log(`Created movie with id: ${createdMovie.id}`);
// 	}

// 	console.log(`Seeding finished.`);
// }

// main()
// 	.then(async () => {
// 		await prisma.$disconnect();
// 	})
// 	.catch(async (e) => {
// 		console.error(e);
// 		await prisma.$disconnect();
// 		process.exit(1);
// 	});
