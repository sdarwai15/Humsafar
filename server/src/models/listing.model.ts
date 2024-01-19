import { model, Schema, Document } from 'mongoose';
import { Listing } from 'interfaces/listings.interface';

const listingSchema: Schema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: Config.collection_names.users,
			required: true,
		},
		title: { type: String, required: true },
		description: { type: String, required: true },
		imageSrc: { type: String, required: true },
		category: { type: String, required: true },
		roomCount: { type: Number, required: true },
		bathroomCount: { type: Number, required: true },
		guestCount: { type: Number, required: true },
		locationValue: { type: String, required: true },
		price: { type: Number, required: true },
		reservations: [
			{
				type: Schema.Types.ObjectId,
				ref: Config.collection_names.reservations,
			},
		],
	},
	{
		timestamps: true,
	}
);

const listingModel = model<Listing & Document>(
	Config.collection_names.listings,
	listingSchema
);

export default listingModel;
