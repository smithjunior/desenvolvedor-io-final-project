import { ContaGuard } from './services/conta.guard';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContaAppComponent } from './conta.app.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const contaRouterConfig: Routes = [
  {
    path: '', component: ContaAppComponent,
    children: [
      {
        path: 'cadastro',
        component: CadastroComponent,
        canDeactivate: [ContaGuard],
        canActivate: [ContaGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [ContaGuard]

      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(contaRouterConfig)
  ],
  exports: [RouterModule]
})
export class ContaRoutingModule {

}
