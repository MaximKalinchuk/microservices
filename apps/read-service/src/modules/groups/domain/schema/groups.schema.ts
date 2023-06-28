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
}

export const GroupSchema = SchemaFactory.createForClass(Group);
