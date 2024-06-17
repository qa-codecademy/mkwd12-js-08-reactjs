import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FeatureModule } from './feature.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    FeatureModule,
  ],
})
export class AppModule {}
