import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  template:`
           <h1>Welcome to ABOUTUS</h1>
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

export class AboutusComponent {
  cricketers=["MS Dhoni","Virat","Rohit"];

}
