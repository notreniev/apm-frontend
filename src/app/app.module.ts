import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { IConfig, NgxMaskModule } from "ngx-mask";
import { CardBadgeComponent } from "src/shared/components/card-badge/card-badge.component";
import { CardContentComponent } from "src/shared/components/card-content/card-content.component";
import { CardProgressBarComponent } from "src/shared/components/card-progress-bar/card-progress-bar.component";
import { CardComponent } from "src/shared/components/card/card.component";
import { FooterComponent } from "src/shared/components/footer/footer.component";
import { LogoutModalComponent } from "src/shared/components/logout-modal/logout-modal.component";
import { SidebarBrandComponent } from "src/shared/components/sidebar-brand/sidebar-brand.component";
import { SidebarComponent } from "src/shared/components/sidebar/sidebar.component";
import { TopbarComponent } from "src/shared/components/topbar/topbar.component";
import { RenderDirective } from "src/shared/directives/render.directive";
import { SearchPipe } from "src/shared/pipes/search.pipe";
import { AlunoEdicaoComponent } from "./aluno/edicao/aluno-edicao.component";
import { AlunoComponent } from "./aluno/lista/aluno.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CursoEdicaoComponent } from "./curso/edicao/curso-edicao.component";
import { CursoComponent } from "./curso/lista/curso.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { InstituicaoEdicaoComponent } from "./instituicao/edicao/instituicao-edicao.component";
import { InstituicaoComponent } from "./instituicao/lista/instituicao.component";

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    CursoComponent,
    InstituicaoComponent,
    AlunoEdicaoComponent,
    CursoEdicaoComponent,
    InstituicaoEdicaoComponent,
    SearchPipe,
    SidebarBrandComponent,
    SidebarComponent,
    LogoutModalComponent,
    TopbarComponent,
    CardComponent,
    CardContentComponent,
    CardProgressBarComponent,
    CardBadgeComponent,
    DashboardComponent,
    FooterComponent,
    RenderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxMaskModule.forRoot(options),
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
