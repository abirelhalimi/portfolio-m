import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-google-recaptcha',
  templateUrl: './google-recaptcha.component.html',
  styleUrls: ['./google-recaptcha.component.css'],

})
export class GoogleRecaptchaComponent implements OnInit {

  myRecaptcha = new FormControl(false);

  onScriptLoad() {
    console.log('Google reCAPTCHA loaded and is ready for use!');
  }

  onScriptError() {
    console.log('Something went long when loading the Google reCAPTCHA');
  }

  constructor() {
  }

  ngOnInit() {
  }


}
