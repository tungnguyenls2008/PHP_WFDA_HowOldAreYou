import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

export class AppComponent {
}
import { AppRoutingModule } from './app-routing.module';
import { TimelinesComponent } from './timelines/timelines.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
})
export class AppModule {}
