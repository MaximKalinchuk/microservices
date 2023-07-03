import { BaseSchema } from '@class/classes/schemes/base.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Group extends Document implements BaseSchema {
	@Prop({ required: true })
	id: string;
	@Prop({ required: true })
	groupName: string;
	@Prop({ required: false })
	managerFullName: string;
	@Prop({ required: true })
	creatorId: string;
	@Prop({ required: true })
	created_At: string;
	@Prop({ required: true })
	updated_At: string;
	@Prop({ required: true })
	deleted_At: string | null;
}

export const GroupSchema = SchemaFactory.createForClass(Group);
