import { model, Schema, Document } from 'mongoose';
import { Reservation } from 'interfaces/reservations.interface';

const reservationSchema: Schema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: Config.collection_names.users,
			required: true,
		},
		listingId: {
			type: Schema.Types.ObjectId,
			ref: Config.collection_names.listings,
			required: true,
		},
		startDate: { type: Date, required: true },
		endDate: { type: Date, required: true },
		totalPrice: { type: Number, required: true },
	},
	{
		timestamps: true,
	}
);

const reservationModel = model<Reservation & Document>(
	Config.collection_names.reservations,
	reservationSchema
);

export default reservationModel;
