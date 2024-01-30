import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
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

@NgModule({
  declarations: [
    AppComponent,
    InterestCalculationComponent,
    HomeComponent,
    SubhomeComponent,
    PersonalloanCalculationComponent,
    HomeloanCalculationComponent,
    GoldloanCalculationComponent,
    AgriloanCalculationComponent,
    UserComponent,
    SalaryCalculatorComponent,
    ContactComponent,
    AboutComponent,
    TeamComponent,
    FaqComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    User1Component,
    AgriInterestHistoryComponent,
    GoldInterestHistoryComponent,
    HomeInterestHistoryComponent,
    PersonalInterestHistoryComponent,
    SimpleInterestHistoryComponent,
    CalorieHistoryComponent,
    SalaryHistoryComponent,
    WelcomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
