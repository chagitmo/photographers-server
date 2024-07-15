import { Request, Response } from 'express';
import NodeCache from 'node-cache';
const cache = new NodeCache({ stdTTL: 600 }); 

import { getPhotographersListService, getPhotographerService } from '../services/photographersService';
import { PhotographerDetails, ShortPhotographer } from '../types/photographersTypes';

export const getPhotographersList = async (req: Request, res: Response): Promise<Response<ShortPhotographer[] | string>> => {
	try {
		const page = parseInt(req.query.page as string, 10) || 1;
		const pageSize = parseInt(req.query.pageSize as string, 10) || 5;

		console.log(`getPhotographersList: Fetching photographers list for page ${page} with pageSize ${pageSize}`);

		const photographers = getPhotographersListService(page, pageSize);

		console.log(`getPhotographersList: Photographers list fetched for page ${page} with pageSize ${pageSize}`);

		return res.status(200).json(photographers);
	} catch (err: any) {
		console.error(`getPhotographersList: Error fetching photographers list: ${err?.message}`);
		return res.status(500).json(err?.message);
	}
};

export const getPhotographer = async (req: Request, res: Response): Promise<Response<PhotographerDetails | string>> => {
	try {
		const photographerId = parseInt(req.params.id as string, 10);
		const keyCahce = `photographer_${photographerId}`;
		
		console.log(`getPhotographer: Fetching photographer with ID ${photographerId}`);

		const cachedPhotographer = cache.get(keyCahce);
		if (cachedPhotographer) {
			console.log(`getPhotographer: Found cached photographer with ID ${photographerId}`);
			return res.status(200).json(cachedPhotographer);
		}
		const photographer = getPhotographerService(photographerId);
		if (photographer) {
			cache.set(keyCahce, photographer);
			console.log(`getPhotographer: Photographer fetched and cached with ID ${photographerId}`);
			return res.status(200).json(photographer);
		}

		console.warn(`getPhotographer: Photographer not found with ID ${photographerId}`);

		return res.status(404).json('Photographer not found');
	} catch (err: any) {
		console.error(`getPhotographer: Error fetching photographer: ${err?.message}`);
		return res.status(500).json(err?.message);
	}
};