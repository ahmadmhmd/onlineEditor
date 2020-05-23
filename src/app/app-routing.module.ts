import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypescriptComponent } from './typescript/typescript.component';
import { MainComponent } from './main/main.component';
import { AngularComponent } from './angular/angular.component';
import { GithubComponent } from './github/github.component';


const routes: Routes = [
  {path: '', component: MainComponent, children:[
    {path:'typescript', component:TypescriptComponent},
    {path:'angular-cli', component:AngularComponent},
    {path:'react', component:AngularComponent},
    {path:'javascript', component:AngularComponent},
    {path:'github', component:GithubComponent}



  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
