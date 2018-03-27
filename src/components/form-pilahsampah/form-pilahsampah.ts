import { Component } from '@angular/core';

/**
 * Generated class for the FormPilahsampahComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-pilahsampah',
  templateUrl: 'form-pilahsampah.html'
})
export class FormPilahsampahComponent {

  text: string;

  constructor() {
    console.log('Hello FormPilahsampahComponent Component');
    this.text = 'Hello World';
  }

}
