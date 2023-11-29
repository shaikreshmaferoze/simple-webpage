import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  template:`
           <h1>Welcome to Contactus page</h1>
           <div *ngFor="let i of cricketers">
             <ul>{{i}}</ul>
           </div>
           `,
  styles: [`        
           h1{
            color:red;
           }
           `]
  
})

export class ContactusComponent {
  cricketers=["reshma","asiat","arshiya"];

}
