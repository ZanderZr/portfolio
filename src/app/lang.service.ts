import { Injectable, signal } from '@angular/core';
import { Lang } from './translations';

@Injectable({ providedIn: 'root' })
export class LangService {
  lang = signal<Lang>((localStorage.getItem('lang') as Lang) ?? 'en');

  toggle() {
    const next: Lang = this.lang() === 'en' ? 'es' : 'en';
    this.lang.set(next);
    localStorage.setItem('lang', next);
  }
}
