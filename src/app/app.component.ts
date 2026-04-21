import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ProjectCardComponent } from "./components/project-card/project-card.component";

@Component({
  selector: 'app-root',
  imports: [ProjectCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
