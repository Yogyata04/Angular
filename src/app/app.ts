import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  // name =signal('Yogyata');
  // age="12";
  userData=signal({
    name:"Rimmi Chaubey",
    age:25,
    email:"yogyata25@test.com"
  })

  updateUserData(key:string,val:string){
this.userData.update((item)=>({...item,[key]:val}))
  }
}
