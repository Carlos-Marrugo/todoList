import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TaskService } from '../shared/services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [

    HomePageRoutingModule,
    SharedModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
