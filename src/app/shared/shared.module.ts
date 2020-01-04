import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [CommonModule],
    exports: [
        CommonModule,
        LayoutComponent
    ],
    entryComponents: [],
    providers: []
})
export class SharedModule { }
