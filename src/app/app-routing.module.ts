import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AlluserComponent } from './alluser/alluser.component';
import { I4javaComponent } from './i4java/i4java.component';
import { RegistersComponent } from './registers/registers.component';


const routes: Routes = [
  {
    path: "", redirectTo: "i4java", pathMatch: "full"
  },
  {
    path: "search", component: SearchComponent
  },
  {
    path: "all-users", component: AlluserComponent
  },
  {
    path: "register", component: RegistersComponent
  },
  {
    path: "i4java", component: I4javaComponent
  },
  {
    path: "**", component: I4javaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
