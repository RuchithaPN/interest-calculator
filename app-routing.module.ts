import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterestCalculationComponent } from './interest-calculation/interest-calculation.component';
import { HomeComponent } from './home/home.component';
import { SubhomeComponent } from './subhome/subhome.component';
import { PersonalloanCalculationComponent } from './personalloan-calculation/personalloan-calculation.component';
import { HomeloanCalculationComponent } from './homeloan-calculation/homeloan-calculation.component';
import { GoldloanCalculationComponent } from './goldloan-calculation/goldloan-calculation.component';
import { AgriloanCalculationComponent } from './agriloan-calculation/agriloan-calculation.component';
import { UserComponent } from './Calorie/user/user.component';
import { SalaryCalculatorComponent } from './SalaryCalculator/salary-calculator/salary-calculator.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProfileComponent } from './profile/profile.component';
import { User1Component } from './user1/user1.component';
import { AgriInterestHistoryComponent } from './history/agri-interest-history/agri-interest-history.component';
import { GoldInterestHistoryComponent } from './history/gold-interest-history/gold-interest-history.component';
import { HomeInterestHistoryComponent } from './history/home-interest-history/home-interest-history.component';
import { PersonalInterestHistoryComponent } from './history/personal-interest-history/personal-interest-history.component';
import { SimpleInterestHistoryComponent } from './history/simple-interest-history/simple-interest-history.component';
import { CalorieHistoryComponent } from './history/calorie-history/calorie-history.component';
import { SalaryHistoryComponent } from './history/salary-history/salary-history.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'login' },
{path:'home',component:HomeComponent},
{path:'subhome',component:SubhomeComponent},
{path:'about',component:AboutComponent},
{path:'user1',component:User1Component},
{path:'contact',component:ContactComponent},
{path:'faq',component:FaqComponent},
{path:'team',component:TeamComponent},
{path:'interest-calculation',component:InterestCalculationComponent},
{path:'personalloan-calculation',component:PersonalloanCalculationComponent},
{path:'homeloan-calculation',component:HomeloanCalculationComponent},
{path:'goldloan-calculation',component:GoldloanCalculationComponent},
{path:'agriloan-calculation',component:AgriloanCalculationComponent},
{path: 'agri-interest-history', component: AgriInterestHistoryComponent},
{ path: 'gold-interest-history', component: GoldInterestHistoryComponent},
{ path: 'home-interest-history', component: HomeInterestHistoryComponent},
{ path: 'personal-interest-history', component: PersonalInterestHistoryComponent},
{ path: 'simple-interest-history', component: SimpleInterestHistoryComponent},
{ path: 'calorie-history', component: CalorieHistoryComponent},
{ path: 'salary-history', component: SalaryHistoryComponent},
{path:'user',component:UserComponent},
{path:'SalaryCalculator',component:SalaryCalculatorComponent},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'user', component: BoardUserComponent },
{ path: 'mod', component: BoardModeratorComponent },
{ path: 'admin', component: BoardAdminComponent },
{ path: 'welcome', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
