import express, { Express } from 'express';
import { routes as moviesRoutes } from './domains/movies';

export const createApplication = (): Express => {
	const app = express();

	app.use(moviesRoutes);

	return app;
};
