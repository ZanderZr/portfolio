import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { translations } from '../translations';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  langService = inject(LangService);

  ngOnInit() {
    document.body.classList.add('no-snap');
    window.scrollTo(0, 0);
  }

  ngOnDestroy() {
    document.body.classList.remove('no-snap');
  }

  get t() { return translations[this.langService.lang()]; }
  get lang() { return this.langService.lang; }

  stackItems = [
    { layer: 'Frontend',        tech: 'Angular 17 · Ionic 7 · TypeScript 5.2' },
    { layer: 'Cross-platform',  tech: 'Capacitor 5 (Android + Web + Electron)' },
    { layer: 'Reactivity',      tech: 'RxJS 7.5 — BehaviorSubjects, reactive stores' },
    { layer: 'UI',              tech: 'Angular Material 17 · Highcharts · Google Maps' },
    { layer: 'Hardware',        tech: 'BLE via @capacitor-community/bluetooth-le · ESP32' },
    { layer: 'Communication',   tech: 'REST · WebSocket (auto-reconnect) · SSE · MQTT' },
    { layer: 'Backend',         tech: 'Node.js · TypeScript 5.7 · Express.js 4.21' },
    { layer: 'ORM & DB',        tech: 'Sequelize 6.37 · MySQL (3 independent instances)' },
    { layer: 'Auth & Security', tech: 'JWT · bcrypt · RBAC (7 roles) · API Key timing-safe' },
    { layer: 'IoT Protocols',   tech: 'ChirpStack (LoRaWAN) · MQTT broker · OTA via FTP' },
  ];

  metrics = [
    { value: '~319', label: 'TypeScript files' },
    { value: '90+',  label: 'Services' },
    { value: '150+', label: 'Components' },
    { value: '5',    label: 'Lazy modules' },
    { value: '35+',  label: 'Sequelize models' },
    { value: '3',    label: 'MySQL databases' },
  ];

  goBack() {
    this.router.navigate(['/']);
  }
}
