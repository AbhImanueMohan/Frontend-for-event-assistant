import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


export class Message{
  constructor(public author:string,  public content:string) { }

}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  conversation = new Subject<Message[]>();
messageMap:any = {
  "hai":"Hello",
  "who are you":"My name is Adrenex Event Assistant ",
  "Who created you":"My creator Abhimanue Mohan",
  "how can i contact u":"you can contact from the home page itself",
  "what is the review from the client":"Most of the clients are staisfied with our work",
  "when u establish this company":"Established on 16-March-2020",
  "how many staffs are in your company":"CEO :Abhimanue Mohan Wedding Manager :Apin       House Warming Manger :Vivek     B'day Party Manager :Nameesh     Baby Showering Manager :Bivin,and 20 other staffs under each manager ",
  "is it profitable for u" :"Customer satisfaction is our priority",
  "thank you":"Have a Good Day.....",
  "Hai":"Hello",
  "how to book":"* Got to see more in home.  * select any of the event you want. * click on the button view. * click book now in view. *fill all the fields and confirm booking.",

  "for booking":"* Got to see more in home.  * select any of the event you want. * click on the button view. * click book now in view. *fill all the fields and confirm booking.",
  "Who are you":"My name is Adrenex Event Assistant ",
  "who created you":"My creator Abhimanue Mohan",
  "How can i contact u":"you can contact from the home page itself",
  "What is the review from the client":"Most of the clients are staisfied with our work",
  "When u establish this company":"Established on 16-March-2020",
  "How many staffs are in your company":"CEO :Abhimanue Mohan, Wedding Manager : Apin           House Warming Manger : Vivek, Birthday Party Manager : Nameesh , Baby Showering Manger : Bivin,and 20 other staffs under each manager ",
  "Is it profitable for u" :"Customer satisfaction is our priority",
  "thank u":"Have a Good Day.....",
  "default":"I can't understand, Can You please repeat otherwise contact Abhimanue Mohan",
  "hi":"Hello",
  "who r u":"My name is Adrenex Event Assistant ",
  "who created u":"My creator Abhimanue Mohan",
  "how can i contact you":"you can contact from the home page itself",
  "what's the review from the client":"Most of the clients are staisfied with our work",
  "when you establish this company":"Established on 16-March-2020",
  "how many staffs are in ur company":"CEO :Abhimanue Mohan, Wedding Manager : Apin , House Warming Manger : Vivek, Birthday Party Manager : Nameesh , Baby Showering Manger : Bivin,and 20 other staffs under each manager ",
  "is it profitable for you" :"Customer  satisfaction is our priority",
}
getBotAnswer(msg:any){
  const userMessage = new Message('user',msg)
  this.conversation.next([userMessage]);
  const botMessage = new Message('bot',this.getBotMessage(msg));
  setTimeout(()=>{
    this.conversation.next([botMessage]);
  },1700)
}
getBotMessage(question:string){
  let answer = this.messageMap[question];
  return answer || this.messageMap['default']

}
}
