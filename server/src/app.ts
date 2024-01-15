import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import { connect, set } from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import path from 'path';
import cors from 'cors';
import hpp from 'hpp';

import { Routes } from './interfaces/route.interface';
import errorMiddleware from './middlewares/error.middleware';

class App {
	public app: Application;
	public port: string | number;
	public env: string;

	constructor(routes: Routes[]) {
		dotenv.config({ path: path.join(__dirname, './config/.env') });
		this.app = express();
		this.port = process.env.PORT || 4000;
		this.env = process.env.NODE_ENV || 'development';

		this.connectToDatabase();
		this.initializeMiddlewares();
		this.initializeRoutes(routes);
		this.initializeErrorHandling();
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`App listening on the port ${this.port}`);
		});
	}

	public getServer() {
		return this.app;
	}

	private connectToDatabase() {
		if (this.env !== 'production') {
			set('debug', true);
		}

		connect(process.env.MONGO_URI)
			.then((con) => {
				console.log(
					`Connected to DB on ${con.connection.host} at port ${con.connection.port}`
				);
			})
			.catch((err) => {
				console.log(`Error connecting to DB: ${err}`);
			});
	}

	private initializeMiddlewares() {
		this.app.use(
			cors({
				origin: true,
				credentials: true,
			})
		);
		this.app.use(hpp());
		this.app.use(helmet());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(cookieParser());
	}

	private initializeRoutes(routes: Routes[]) {
		routes.forEach((route) => {
			this.app.use('/api', route.router);
		});
	}

	private initializeErrorHandling() {
		this.app.use(errorMiddleware);
	}
}

export default App;
