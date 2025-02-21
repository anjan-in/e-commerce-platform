import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user = { username: '', email: '', password: '' };
  errorMessage = '';

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  signup() {
    this.authService.signup(this.user).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/products']);
      },
      error: (err) => {
        this.errorMessage = 'Signup failed. Try again.';
      }
    });
  }

}
