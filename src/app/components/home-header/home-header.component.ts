import { Component } from '@angular/core';
import { FancyButtonComponent } from '../fancy-button/fancy-button.component';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [FancyButtonComponent],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {
  faGithub = faGithub;
}
