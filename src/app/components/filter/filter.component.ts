import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  darkMode: boolean = false;

  @Output() changeSearch = new EventEmitter<string>();
  @Output() changeSelect = new EventEmitter<string>();
  @Output() changeTheme = new EventEmitter<boolean>();


  public searchBooks(key: string) :void{
    
    this.changeSearch.emit(key)
  }

  public selectChange(event: any) {

    this.changeSelect.emit(event)

  }

  public themeChange(darkMode: boolean) {
    this.darkMode = !this.darkMode
    this.changeTheme.emit(darkMode)
  }




  // toggleDarkMode() {
  //   console.log(this.darkMode);
    
  //   this.darkMode = !this.darkMode;
  // }
}
