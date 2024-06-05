import { Module } from '@nestjs/common';
import { LettersModule } from './letters/letters.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: 
  [
    MongooseModule.forRoot(
      'mongodb+srv://Cesar:12345@portafolioapp.ibmo1gf.mongodb.net/Empresas?retryWrites=true&w=majority&appName=PortaFolioApp'),
    LettersModule
  ]
})
export class AppModule {}
