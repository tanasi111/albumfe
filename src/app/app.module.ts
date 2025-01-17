import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumPreviewComponent } from './albums/album-preview/album-preview.component';
import { AlbumPhotosComponent } from './albums/album-photos/album-photos.component';
import { PhotoComponent } from './albums/photo/photo.component';
import { SharedModule } from './shared/shared.module';
import { FilterPipe } from './filter.pipe';
import { LightboxComponent } from './shared/lightbox/lightbox.component';
import { DeleteIconComponent } from './delete/delete-icon/delete-icon.component';
import { DeleteDialogComponent } from './delete/delete-dialog/delete-dialog.component';
import { LogoutComponent } from './shared/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlbumsComponent,
    AlbumPreviewComponent,
    AlbumPhotosComponent,
    PhotoComponent,
    FilterPipe,
    LightboxComponent,
    DeleteIconComponent,
    DeleteDialogComponent,
    LogoutComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
