import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ClassesService } from './classes.service';
import { TimerService } from './timer.service';
import { ClassesComponent } from './classes/classes.component';
import { RouterModule } from '@angular/router';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
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
  ],
  bootstrap: [AppComponent],
  providers: [ClassesService, TimerService],
})
export class AppModule {}
