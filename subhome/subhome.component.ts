import { Component } from '@angular/core';

@Component({
  selector: 'app-subhome',
  templateUrl: './subhome.component.html',
  styleUrls: ['./subhome.component.css']
})
export class SubhomeComponent {


  showingPopup: string | null = null;

  showPopup(formName: string) {
    this.showingPopup = formName;
  }
}
