import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProducts(req: Request, res: Response) {
	try {
		res.send('OK');

	} catch (error) {
		res.sendStatus(500);
		console.error(error);
	}
}
