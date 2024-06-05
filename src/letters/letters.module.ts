import { Module } from '@nestjs/common';
import { LettersController } from './letters.controller';
import { LettersService } from './letters.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Letters, LetterSchema } from 'src/Schemas/letter.schema';

@Module({
  imports:
  [
    MongooseModule.forFeature([
        {
          name: Letters.name,
          schema: LetterSchema,
        },
      ]),
  ],
  controllers: [LettersController],
  providers: [LettersService],
})
export class LettersModule {}
