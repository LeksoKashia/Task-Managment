import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private renderer: Renderer2) { }



  themeChange(darkMode: boolean){
    if (darkMode) {
      this.renderer.setStyle(document.body, 'background-color', 'white');
    }else{
      this.renderer.setStyle(document.body, 'background-color', 'rgba(37, 37, 37, 1)');
    }
  }
  // rgba(37, 37, 37, 1)


}
