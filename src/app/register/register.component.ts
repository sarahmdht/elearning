import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
login =  new FormGroup ({
  email: new FormControl(''),
  password: new FormControl('')
})
onSubmit(){
  console.log(this.login.value);
}
}
