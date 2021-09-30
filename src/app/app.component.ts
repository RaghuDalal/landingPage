import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing';
  lati: number=15.5007;
  long: number=32.5599;
  isEng: Boolean = true;

  changeLanguage(language){
    if (language=='english'){
      this.isEng = true;
    } else {
      this.isEng = false;
    }
    
  }
}
