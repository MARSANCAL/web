import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  
 redirigirADrive() {
    var urlDrive = 'https://drive.google.com/drive/folders/1s0evPumgfK6cKLntwu8qjD8fZjvRSPXx';
    window.location.href = urlDrive;
  }
}
