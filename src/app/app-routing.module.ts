import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoEdicaoComponent } from './aluno/edicao/aluno-edicao.component';
import { AlunoComponent } from './aluno/lista/aluno.component';
import { CursoEdicaoComponent } from './curso/edicao/curso-edicao.component';
import { CursoComponent } from './curso/lista/curso.component';
import { InstituicaoEdicaoComponent } from './instituicao/edicao/instituicao-edicao.component';
import { InstituicaoComponent } from './instituicao/lista/instituicao.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'aluno', component: AlunoComponent },
  { path: 'aluno/:id', component: AlunoEdicaoComponent },
  { path: 'aluno/add', component: AlunoEdicaoComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'curso/:id', component: CursoEdicaoComponent },
  { path: 'curso/add', component: CursoEdicaoComponent },
  { path: 'instituicao', component: InstituicaoComponent },
  { path: 'instituicao/:id', component: InstituicaoEdicaoComponent },
  { path: 'instituicao/add', component: InstituicaoEdicaoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  routes
}
