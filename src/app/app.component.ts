import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from "./components/project-card/project-card.component";

@Component({
  selector: 'app-root',
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';
  menuOpen = false;
  activeSection = 'home';

  private observer!: IntersectionObserver;

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        }
      },
      {
        root: document.body,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
      }
    );

    ['home', 'about', 'projects', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
