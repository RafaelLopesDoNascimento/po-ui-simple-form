import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  PoModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-input-name-password-email',
  standalone: true,
  imports: [PoModule, FormsModule],
  templateUrl: './input-name-password-email.component.html',
  styleUrl: './input-name-password-email.component.css'
})
export class InputNamePasswordEmailComponent {
  public inputClear: string = "";
  public inputPo: string = "Nothing yet";

 onClick() {
  alert('The form was updated !');
  this.inputPo = this.inputClear;
}
}
