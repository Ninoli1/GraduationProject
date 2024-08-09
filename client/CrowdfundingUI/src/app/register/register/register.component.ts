import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { User } from '../../model/user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
   FormsModule,
   MatFormFieldModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

 
  constructor(private authService:AuthService,private router:Router) {
    
  }
  
  user :User={
    username:'',
    password:'',
    email:'',
    id:0,
     role: 'USER'
  }

  onSubmit(){
    this.authService.register(this.user).subscribe({
      next:(res)=>{
        console.log(res)
        this.router.navigate(['login'])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
