import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../exceptions/HttpExceptions';

const errorMiddleware = (
	error: HttpException,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const status: number = error.status || 500;
		const message: string = error.message || 'Something went wrong';

		res.status(status).send({
			status,
			message,
		});
	} catch (error) {
		next(error);
	}
};

export default errorMiddleware;
