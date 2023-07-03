import { BaseSchema } from '@class/classes/schemes/base.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Manager extends Document implements BaseSchema {
	@Prop({ required: true })
	id: string;
	@Prop({ required: true })
	email: string;
	@Prop({ required: true })
	passwordHash: string;
	@Prop({ required: true })
	fullName: string;
	@Prop({ required: true })
	created_At: string;
	@Prop({ required: true })
	updated_At: string;
	@Prop({ required: true })
	deleted_At: string | null;
}

export const ManagerSchema = SchemaFactory.createForClass(Manager);
