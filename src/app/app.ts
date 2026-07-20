import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  // Two Way Binding
  // name =signal('Yogyata');
  // age="12";
//   userData=signal({
//     name:"Rimmi Chaubey",
//     age:25,
//     email:"yogyata25@test.com"
//   })

//   updateUserData(key:string,val:string){
// this.userData.update((item)=>({...item,[key]:val}))
//   }


//Getter and Setter for Signal
// userName=signal("Yogyata Chaubey");
// userData=signal({
//   college:"pcacs",
//   email:"pcacs34@test.com"
// })

// get uName(){
//   return this.userName();
// }
// set uName(val:string){
//   this.userName.set(val)
// }

// get userCollege(){
//   return this.userData().college;
// }
// set userCollege(val){
//   this.userData.update((item)=>({...item,college:val}))
// }
// get userEmail(){
//   return this.userData().email;
// }
// set userEmail(val){
//   this.userData.update((item)=>({...item,email:val}))
// }


// Directive
// isLogin=signal(true)
// isLogin=signal(false)
// users=signal(["rimmi","riya","shivani","hariom"])
// pColor="pink"
}
