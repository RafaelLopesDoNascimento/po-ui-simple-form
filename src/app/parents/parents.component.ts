import { Component } from '@angular/core';
import { InputNamePasswordEmailComponent } from '../components/input-name-password-email/input-name-password-email.component';


@Component({
  selector: 'app-parents',
  standalone: true,
  imports: [InputNamePasswordEmailComponent],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.css'
})
export class ParentsComponent {
  public inputEmailParent: string = ""
}
