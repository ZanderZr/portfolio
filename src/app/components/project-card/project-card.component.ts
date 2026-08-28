import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActionKind } from '../../projects';

export interface CardAction {
  kind: ActionKind;
  url: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  private router = inject(Router);

  @Input() title: string = '';
  @Input() info: string = '';
  @Input() icon: string = '';
  @Input() actions: CardAction[] = [];

  run(action: CardAction) {
    if (action.kind === 'detail') {
      this.router.navigate([action.url]);
    } else {
      window.open(action.url, '_blank', 'noopener');
    }
  }
}
