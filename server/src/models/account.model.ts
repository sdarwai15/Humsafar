import { model, Schema, Document } from 'mongoose';
import { Account } from 'interfaces/accounts.interface';

const accountSchema: Schema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: Config.collection_names.users,
	},
	type: String,
	provider: { type: String, unique: true },
	providerAccountId: { type: String, unique: true },
	refresh_token: String,
	access_token: String,
	expires_at: Number,
	token_type: String,
	scope: String,
	id_token: String,
	session_state: String,
});

const accountModel = model<Account & Document>(
	Config.collection_names.accounts,
	accountSchema
);

export default accountModel;
