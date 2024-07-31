import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { InitialComponent } from "./initial/initial.component";
import { LocalComponent } from "./local/local.component";
import { ProjectComponent } from "./project/project.component";
import { InterestComponent } from "./interest/interest.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'initial', component: InitialComponent },
    { path: 'local', component: LocalComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'interest', component: InterestComponent },
    {path: "", redirectTo: "/home", pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }