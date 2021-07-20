import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LanguageComponent } from './language/language.component';
import { TestCanActivate,TestCanDeactivate} from '../app/guards';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminmoduleComponent } from './admin/adminmodule/adminmodule.component';
import { HomeComponent } from './admin/home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { StockComponent } from './admin/stock/stock.component';
import { TradingComponent } from './admin/trading/trading.component';
import { StockgrpahicComponent } from './admin/stockgrpahic/stockgrpahic.component';
import { DstockComponent } from './dstock/dstock.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/Login' },
 
  { path:'Administrator',component:AdminmoduleComponent,canDeactivate:[TestCanDeactivate] ,canActivate:[TestCanActivate],
   children:[{path:'Home',component:HomeComponent}, { path:'Userlist',component:UserlistComponent},{ path:'Stock',component:StockComponent},
   { path:'Tradingdata',component:TradingComponent},
   { path:'Stockgraphic',component:StockgrpahicComponent}]},
  
  { path:'Login',component:LoginComponent},
  { path:'Signup',component:SignupComponent},
  { path:'Dashboard',component:DashboardComponent,canActivate:[TestCanActivate],canDeactivate:[TestCanDeactivate],
  children:[{path:'Language',component:LanguageComponent},  { path:'Friends',component:FriendsComponent},
            {path:'Stock',component:DstockComponent}, {path:'Visual',component:StockgrpahicComponent}]},
  { path: 'Login', loadChildren: () => import('./app.module').then(m => m.AppModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/Login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
