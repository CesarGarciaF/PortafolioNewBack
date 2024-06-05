import { IsString, IsNumber, IsBoolean, IsOptional, IsNotEmpty, IsPostalCode } from "class-validator";

export class CreateLettersDto
{
    @IsNotEmpty()
    @IsString()
    empresaName :string;

    @IsOptional()
    @IsString()
    aboutField: string;

    @IsNotEmpty()
    @IsString()
    phoneNumber: string

    @IsOptional()
    done?: boolean;
}