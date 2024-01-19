import { Router } from 'express';
import { Routes } from '../interfaces/routes.interface';

class AuthRoute implements Routes {
	public path = '/auth';
	public router = Router();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get(`${this.path}/api-version`, (req, res) => {
			res.status(200).send({
				status: 200,
				message: 'API version 1.0.0',
			});
		});
	}
}

export default AuthRoute;
