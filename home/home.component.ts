import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showingPopup: string | null = null;

  showPopup(formName: string) {
    this.showingPopup = formName;
  }

}
