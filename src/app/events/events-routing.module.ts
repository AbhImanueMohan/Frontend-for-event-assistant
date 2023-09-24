import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { BookComponent } from './book/book.component';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component';
import { PackageComponent } from './package/package.component';

const routes: Routes = [
  { 
    path: '', component: EventsComponent 
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path: 'home/view-event/:id',
    component: ViewEventComponent
  },
  {
    path:'package',
    component:PackageComponent
  },
  {
    path:'home/book',component:BookComponent
  },
  {
    path:'home/chat',component:ChatComponent
  },
  {
    path:'home/contact',component:ContactComponent
  }
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
