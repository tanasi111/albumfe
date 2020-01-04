import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { AuthGuardService } from './auth-guard.service';
import { AlbumPhotosComponent } from './albums/album-photos/album-photos.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'albums', component: AlbumsComponent, canActivate: [AuthGuardService] },
  { path: 'albums/:id', component: AlbumPhotosComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
