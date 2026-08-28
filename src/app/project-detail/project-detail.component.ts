import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { translations } from '../translations';
import { projectDetails } from '../projects';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  langService = inject(LangService);

  slug = '';

  ngOnInit() {
    document.body.classList.add('no-snap');

    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      // Un slug desconocido vuelve al home en vez de renderizar una pagina vacia.
      if (!projectDetails[slug]) {
        this.router.navigate(['/']);
        return;
      }
      this.slug = slug;
      window.scrollTo(0, 0);
    });
  }

  ngOnDestroy() {
    document.body.classList.remove('no-snap');
  }

  get t() { return translations[this.langService.lang()]; }
  get lang() { return this.langService.lang; }

  get project() { return projectDetails[this.slug]; }
  get text() { return this.t.details[this.slug as keyof typeof this.t.details]; }

  goBack() {
    this.router.navigate(['/']);
  }
}
