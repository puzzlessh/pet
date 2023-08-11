import { Router } from 'express';
import { createMovie, getMovieById, getMovies } from './movie.controller';

const routes = Router();

routes.get('/movies', getMovies);
routes.get('/movies/:id', getMovieById);
routes.post('/movies', createMovie);

export { routes };
