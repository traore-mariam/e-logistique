import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule 
{
  path: 'client',
  loadChildren: () =>
    import('./features/client/client.module').then(m => m.ClientModule),
  canActivate: [roleGuard]
}
