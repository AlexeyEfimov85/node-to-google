import { Module } from '@nestjs/common';
import { DataController } from '../data-api/data-api.controller';
import { DataService } from './data-api.service';
import { ClientsRepositoryModule } from 'src/datalake/clients/clients.module';
import { ClientsModule } from 'src/core/clients/clients.module';
import { ClientsStatusModule } from 'src/core/clientsstatus/clientsstatus.module';

@Module({
  imports: [ClientsRepositoryModule, ClientsModule, ClientsStatusModule],
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}
