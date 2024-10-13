import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { HomeComponent } from './home/home.component'
import { CreateSetComponent } from './create-set/create-set.component'
import { FlashcardsComponent } from './flashcards/flashcards.component'
import { SettingsComponent } from './settings/settings.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create-set', component: CreateSetComponent },
  { path: 'flashcards/:id', component: FlashcardsComponent },
  { path: 'settings', component: SettingsComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}