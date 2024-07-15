import { BasePhotographer, ShortPhotographer, PhotographerDetails } from '../types/photographersTypes';
import photographers from './photographers.json';

const photographersData: BasePhotographer[] = photographers;

export const getPhotographersListService = (page: number, pageSize: number): ShortPhotographer[] => {
    console.log(`getPhotographersListService: Fetching photographers list for page ${page} with pageSize ${pageSize}`);

    const sortedPhotographers = photographersData.sort((a, b) => a.first_name.localeCompare(b.first_name));
	const paginatedPhotographers = sortedPhotographers.slice((page - 1) * pageSize, page * pageSize);

    console.log(`getPhotographersListService: Found ${paginatedPhotographers.length} photographers for page ${page}`);

    return paginatedPhotographers.map(p => {
        const {
            id, 
            avatar, 
            first_name: firstName, 
            last_name: lastName, 
            address: {state, city}
        } = p;
        return {id, avatar, firstName, lastName, state, city};
    });
}

export const getPhotographerService = (photographerId: number): PhotographerDetails | undefined => {
    console.log(`getPhotographersListService: Fetching photographer with ID ${photographerId}`);

    const photographer = photographersData.find(p => p.id === photographerId);
    if (!photographer) return;

    const {
        id, 
        avatar, 
        first_name: firstName, 
        last_name: lastName, 
        address: {state, city}, 
        phone_number: phoneNumber, 
        email, 
        event_type
    } = photographer;
    const eventType = event_type.type.join(', ');

    console.log(`getPhotographersListService: Found photographer with ID ${photographerId}`);

    return {id, avatar, firstName, lastName, state, city, phoneNumber, email, eventType};
}