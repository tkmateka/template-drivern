import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: any = {
    firstName: '',
    lastName: '',
  };

  submit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log('form value', this.user);
  }
}
