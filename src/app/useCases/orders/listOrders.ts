import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response) {
	try {
		const orders = await Order.find();

		res.json(orders);

	} catch (error) {
		res.sendStatus(500);
		console.error(error);
	}
}
