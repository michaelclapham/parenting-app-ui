import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'activities',
    loadChildren: () => import('./feature/activities/activities.module').then(m => m.ActivitiesPageModule)
  },
  {
    path: 'songs',
    loadChildren: () => import('./feature/songs/songs.module').then(m => m.SongsPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./feature/goals/goals.module').then(m => m.GoalsPageModule)
  },
  {
    path: 'stories',
    loadChildren: () => import('./feature/stories/stories.module').then(m => m.StoriesPageModule)
  },
  {
    path: 'take-a-pause',
    loadChildren: () => import('./feature/take-a-pause/take-a-pause.module').then(m => m.TakeAPausePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./feature/about/about.module').then( m => m.AboutPageModule)
  },  {
    path: 'family',
    loadChildren: () => import('./feature/family/family.module').then( m => m.FamilyPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
