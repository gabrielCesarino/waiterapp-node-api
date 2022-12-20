import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
	try {
		res.send('OK');
		console.log(req.body);
	} catch (error) {
		res.sendStatus(500);
		console.error(error);
	}
}
