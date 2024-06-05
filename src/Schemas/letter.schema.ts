import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema(
    {
        timestamps:true
    }
)

export class Letters
{
    @Prop(
        {
            unique:true,
            required:true,
            trim:true
        }
    )
    empresaName: string;

    @Prop(
        {
            trim:true
        }
    )
    aboutField: string;

    @Prop(
        {
            trim:true
        }
    )
    phoneNumber: string;

    @Prop(
        {
            default:false
        }
    )
    done: boolean;
}

export const LetterSchema = SchemaFactory.createForClass(Letters);