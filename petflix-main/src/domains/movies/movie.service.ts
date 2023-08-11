import { Movie, Prisma } from '@prisma/client';
import { prismaService } from '../../common/database/prisma.service';

export interface IPagination {
	page: number;
	limit: number;
	total: number;
}

interface IDataWithPagination<T> {
	items: T[];
	pagination: IPagination;
}

export interface IFindParams {
	query?: string;
	page?: number;
	limit?: number;
}

export class MoviesService {
	async getMovieById(id: number): Promise<Movie | null> {
		return prismaService.client.movie.findUnique({ where: { id } });
	}

	async findMovies({ page, limit, query }: IFindParams = {}): Promise<IDataWithPagination<Movie>> {
		page = page ?? 1;
		limit = limit ?? 20;

		const skip = (page - 1) * limit;
		const take = limit;

		let where: Prisma.MovieWhereInput = {};

		if (query) {
			where = { title: { contains: query, mode: 'insensitive' } };
		}

		const [total, items] = await prismaService.client.$transaction([
			prismaService.client.movie.count({ where }),
			prismaService.client.movie.findMany({
				where,
				skip,
				take,
			}),
		]);

		return { items, pagination: { page, limit, total: Math.ceil(total / limit) } };
	}
}

export const moviesService = new MoviesService();
