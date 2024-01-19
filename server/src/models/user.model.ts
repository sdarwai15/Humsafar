import { model, Schema, Document } from 'mongoose';
import { User } from 'interfaces/users.interface';

const userSchema: Schema = new Schema(
	{
		name: String,
		email: {
			type: String,
			unique: true,
		},
		emailVerified: Date,
		image: String,
		hashedPassword: String,
		favouriteIds: [
			{
				type: Schema.Types.ObjectId,
				ref: Config.collection_names.listings,
			},
		],
		accounts: [
			{
				type: Schema.Types.ObjectId,
				ref: Config.collection_names.accounts,
			},
		],
		listings: [
			{
				type: Schema.Types.ObjectId,
				ref: Config.collection_names.listings,
			},
		],
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

const userModel = model<User & Document>(
	Config.collection_names.users,
	userSchema
);

export default userModel;
