export interface Listing {
	_id: string;
	userId: string;
	title: string;
	description: string;
	imageSrc: string;
	category: string;
	roomCount: number;
	bathroomCount: number;
	guestCount: number;
	locationValue: string;
	price: number;
	reservations: string[];
	createdAt: Date;
}
