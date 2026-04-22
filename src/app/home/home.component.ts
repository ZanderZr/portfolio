import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { translations } from '../translations';
import { LangService } from '../lang.service';

const WEB3FORMS_KEY = '437b9208-5f2d-49fb-831f-fb62b5333370';

@Component({
  selector: 'app-home',
  imports: [ProjectCardComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  langService = inject(LangService);

  menuOpen = false;
  activeSection = 'home';
  submitStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  get t() { return translations[this.langService.lang()]; }
  get lang() { return this.langService.lang; }

  private sectionObserver!: IntersectionObserver;
  private revealObserver!: IntersectionObserver;

  ngOnInit() {
    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.activeSection = entry.target.id;
        }
      },
      { root: document.body, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    ['home', 'about', 'projects', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) this.sectionObserver.observe(el);
    });

    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.revealObserver.unobserve(entry.target);
          }
        });
      },
      { root: document.body, rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    document.querySelectorAll('.reveal').forEach(el => this.revealObserver.observe(el));
  }

  ngOnDestroy() {
    this.sectionObserver.disconnect();
    this.revealObserver.disconnect();
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.closeMenu();
  }

  sendMessage() {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) return;

    this.submitStatus = 'loading';
    const { name, email, message } = this.contactForm.value;

    this.http.post('https://api.web3forms.com/submit', {
      access_key: WEB3FORMS_KEY,
      name,
      email,
      message
    }).subscribe({
      next: () => {
        this.submitStatus = 'success';
        this.contactForm.reset();
      },
      error: () => {
        this.submitStatus = 'error';
      }
    });
  }
}
