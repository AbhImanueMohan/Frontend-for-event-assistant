import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';
import { PackageComponent } from './package/package.component'

@NgModule({
  declarations: [
    EventsComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BookComponent,
    ViewEventComponent,
    ContactComponent,
    ChatComponent,
    PackageComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EventsModule { }
