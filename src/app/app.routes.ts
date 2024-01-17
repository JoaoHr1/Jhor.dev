import { Routes } from '@angular/router';
import { SobreComponent } from './pages/sobre/sobre/sobre.component';
import { PostsComponent } from './pages/posts/posts/posts.component';

export const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'sobre', component: SobreComponent }, 
  { path: '**', redirectTo: '', pathMatch: 'full' } 

];