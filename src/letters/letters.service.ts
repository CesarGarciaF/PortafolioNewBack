import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Letters } from 'src/Schemas/letter.schema';
import { CreateLettersDto } from 'src/dto/create-letter.dto';
import { UpdateLettersDto } from 'src/dto/update-letter.dto';

@Injectable()
export class LettersService 
{
    constructor(@InjectModel(Letters.name)private lettersModel:Model<Letters>)
    {

    }

    findAll()
    {
        return this.lettersModel.find();
    }

    async create(createLetter : CreateLettersDto)
    {
        const newLetter = new this.lettersModel(createLetter);
        return newLetter.save();
    }

    async findOne(id:string)
    {
        return this.lettersModel.findById(id);
    }

    async delete(id:string)
    {
        return this.lettersModel.findByIdAndDelete(id);
    }

    async update(id:string, letter: UpdateLettersDto)
    {
        return this.lettersModel.findByIdAndUpdate(id, letter, {new : true});
    }
}
