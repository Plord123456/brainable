import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-question-result',
  standalone: true,
  imports: [
    MatButton,
    MatIcon
  ],
  templateUrl: './question-result.component.html',
  styleUrl: './question-result.component.scss'
})
export class QuestionResultComponent {

}
