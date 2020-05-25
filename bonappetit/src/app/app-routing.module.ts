import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

const appRoutes: Routes= [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', loadChildren: ()=> import('./recipes/recipes.module').then(m=> RecipesModule)},
    {path: 'shopping-list', loadChildren: ()=> import('./shopping-list/shopping-list.module').then(m=> ShoppingListModule)},
    {path: 'auth', component: AuthComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule{}