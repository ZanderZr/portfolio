import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() githubLink: string = '';
  @Input() detailLink: string = '';
  @Input() btnLabel: string = 'Github';
  @Input() btnIcon: string = 'fa-brands fa-github';

  handleClick() {
    if (this.detailLink) {
      this.router.navigate([this.detailLink]);
    } else if (this.githubLink) {
      window.open(this.githubLink, '_blank');
    }
  }

  get hasAction(): boolean {
    return !!(this.detailLink || this.githubLink);
  }
}
