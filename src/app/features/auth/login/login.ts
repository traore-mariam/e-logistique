import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);

        const role = response.role;

        if (role === 'CLIENT') {
          this.router.navigate(['/client']);
        } else if (role === 'GESTIONNAIRE') {
          this.router.navigate(['/gestionnaire']);
        } else if (role === 'TRANSPORTEUR') {
          this.router.navigate(['/transporteur']);
        } else if (role === 'ADMIN') {
          this.router.navigate(['/admin']);
        }
      },
      error: () => {
        alert("Email ou mot de passe incorrect !");
      }
    });
  }
  localStorage.setItem('role', response.role);

}
