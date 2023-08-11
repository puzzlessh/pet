import { NextFunction, Request, Response } from 'express';
import { prismaService } from '../../common/database/prisma.service';
import { IFindParams, moviesService } from './movie.service';

export const getMovies = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { page, limit, query } = req.query;

		const findParams: IFindParams = {
			...(Number.isSafeInteger(Number(page)) ? { page: Number(page) } : {}),
			...(Number.isSafeInteger(Number(limit)) ? { limit: Number(limit) } : {}),
			...(typeof query === 'string' && query.trim().length ? { query: query.trim() } : {}),
		};

		const data = await moviesService.findMovies(findParams);

		res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

export const getMovieById = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const id = Number(req.params['id']);
		const movie = await prismaService.client.movie.findUnique({
			where: { id },
		});

		res.status(200).json({
			data: movie,
		});
	} catch (e) {
		next(e);
	}
};

export const createMovie = (req: Request, res: Response): void => {
	res.status(200).json({
		data: { create: 1 },
	});
};
