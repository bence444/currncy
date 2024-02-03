import { Component, Input } from '@angular/core';
import { CardDto } from '../../../shared/models/card.dto';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss'
})
export class HomeCardComponent {
  
  @Input() card: CardDto | undefined;

}
