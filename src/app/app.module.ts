import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ClassesService } from './classes.service';
import { TimerService } from './timer.service';
import { ClassesComponent } from './classes/classes.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'timer',
        component: TimerComponent,
      },
      {
        path: 'classes',
        component: ClassesComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TimerComponent,
    ClassesComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ClassesService, TimerService],
})
export class AppModule {}
