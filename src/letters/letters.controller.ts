import { 
        Controller, 
        Get, 
        Post, 
        Put, 
        Delete, 
        Body, 
        Param, 
        ConflictException, 
        NotFoundException, 
        HttpCode
        } from '@nestjs/common';
import { LettersService } from './letters.service';
import { CreateLettersDto } from 'src/dto/create-letter.dto';

@Controller('letters')
export class LettersController 
{
    constructor(private letterService: LettersService) {}

    @Get()
    findAll()
    {
        return this.letterService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id:string)
    {
        const letter = await this.letterService.findOne(id);
        if (!letter) throw new NotFoundException('Carta no encontrada');
        return letter;
    }

    @Post()
    createLetter(@Body()body:CreateLettersDto)
    {
        try
        {
            return this.letterService.create(body);
        }
        catch (error)
        {
            if (error.code === 11000)
            {
                throw new ConflictException('Carta ya existente');
            }
            throw error;
        }
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteLetter(@Param('id') id:string)
    {
        const letter = await this.letterService.delete(id);
        if (!letter) throw new NotFoundException('Carta no encontrada');
        return letter;
    }

    @Put(':id')
    async editLetter(@Param('id') id:string, @Body() body:any)
    {   
        const letter = await this.letterService.update(id, body);
        if (!letter) throw new NotFoundException('Carta no encontrada');
        return letter;
    }
}
