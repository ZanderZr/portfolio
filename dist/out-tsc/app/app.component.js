import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from "./components/project-card/project-card.component";
import { translations } from './translations';
let AppComponent = class AppComponent {
    menuOpen = false;
    activeSection = 'home';
    lang = signal('en');
    get t() { return translations[this.lang()]; }
    toggleLang() {
        this.lang.set(this.lang() === 'en' ? 'es' : 'en');
    }
    sectionObserver;
    revealObserver;
    ngOnInit() {
        this.sectionObserver = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    this.activeSection = entry.target.id;
                }
            }
        }, { root: document.body, rootMargin: '-40% 0px -40% 0px', threshold: 0 });
        ['home', 'about', 'projects', 'contact'].forEach(id => {
            const el = document.getElementById(id);
            if (el)
                this.sectionObserver.observe(el);
        });
        this.revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    this.revealObserver.unobserve(entry.target);
                }
            });
        }, { root: document.body, rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
        document.querySelectorAll('.reveal').forEach(el => this.revealObserver.observe(el));
    }
    ngOnDestroy() {
        this.sectionObserver.disconnect();
        this.revealObserver.disconnect();
    }
    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
    closeMenu() {
        this.menuOpen = false;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        imports: [ProjectCardComponent, CommonModule],
        templateUrl: './app.component.html',
        styleUrl: './app.component.scss'
    })
], AppComponent);
export { AppComponent };
