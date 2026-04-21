import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ProjectCardComponent = class ProjectCardComponent {
    title = '';
    info = '';
    icon = '';
    githubLink = '';
    buttonClick() {
        window.open(this.githubLink, '_blank');
    }
};
__decorate([
    Input()
], ProjectCardComponent.prototype, "title", void 0);
__decorate([
    Input()
], ProjectCardComponent.prototype, "info", void 0);
__decorate([
    Input()
], ProjectCardComponent.prototype, "icon", void 0);
__decorate([
    Input()
], ProjectCardComponent.prototype, "githubLink", void 0);
ProjectCardComponent = __decorate([
    Component({
        selector: 'app-project-card',
        imports: [],
        templateUrl: './project-card.component.html',
        styleUrl: './project-card.component.scss'
    })
], ProjectCardComponent);
export { ProjectCardComponent };
