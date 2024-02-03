import { Component, Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-fancy-button',
  standalone: true,
  imports: [FontAwesomeModule, MatRippleModule],
  templateUrl: './fancy-button.component.html',
  styleUrl: './fancy-button.component.scss'
})
export class FancyButtonComponent {
  @Input() icon: IconDefinition | undefined;
  @Input() text: string = '';
  @Input() url: string = '#';

  toUrl() {
    window.open(this.url, '_blank');
  }
}
