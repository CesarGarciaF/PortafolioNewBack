import { IsString, IsNumber, IsBoolean, IsOptional, IsNotEmpty, IsPostalCode, isNumber } from "class-validator";

export class UpdateLettersDto
{
    @IsString()
    @IsOptional()
    empresaName? :string;

    @IsString()
    @IsOptional()
    aboutField?: string;

    @IsNotEmpty()
    @IsNumber()
    phoneNumber: number
    
    @IsBoolean()
    @IsOptional()
    done?: boolean;
}