import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isPostsActived() {
    if (window.location.pathname === '/') {
      return 'postsActived';
    }
    return 'postsDisabled';
  }

  isSobreActived() {
    if (window.location.pathname === '/sobre') {
      return 'sobreActived';
    }
    return 'sobreDisabled';
  }

}
