import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  @Input() title: string = '';
  @Input() info: string = '';
  @Input() icon: string = '';
  @Input() githubLink: string = '';

  buttonClick(){
    window.open(this.githubLink, '_blank');
  }
}
