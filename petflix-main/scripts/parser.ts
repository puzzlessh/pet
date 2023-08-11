import fs from 'node:fs';
import path, { join } from 'node:path';
import { prismaService } from '../src/common/database/prisma.service';

export function* parseMovies() {
	const SOURCE_DIR = join(process.cwd(), 'movies-json');
	const filesNames = fs.readdirSync(SOURCE_DIR);

	for (const filename of filesNames) {
		const data = fs.readFileSync(join(SOURCE_DIR, filename), { encoding: 'utf-8' });
		const json = JSON.parse(data);
		const originalMovies = json['data']['movies'] as any[];

		for (const originalMovie of originalMovies) {
			yield {
				sourceId: originalMovie.id,
				title: originalMovie.title,
				year: originalMovie.year,
				rating: originalMovie.rating,
				genres: originalMovie.genres,
				language: originalMovie.language,
				image: originalMovie['large_cover_image'] || originalMovie['medium_cover_image'],
				torrents: originalMovie.torrents || [],
				description: originalMovie['description_full'],
			};
		}
	}
}

const main = async (): Promise<void> => {
	for (const movie of parseMovies()) {
		const createdMovie = await prismaService.client.movie.create({
			data: movie,
		});

		console.log(`Movie was created with id=${createdMovie.id}`);
	}
};

main().then(() => {
	console.log('All movies created!');
});
