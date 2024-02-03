import { Routes } from '@angular/router';
import { PageNotFoundPage } from './pages/page-not-found/page-not-found.page';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: '**', component: PageNotFoundPage }
];
