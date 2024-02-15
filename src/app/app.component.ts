import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ClickDirective } from './click/click.directive';
import { CharPipePipe } from './twoCharPipe/char-pipe.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ClickDirective, CharPipePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-5';
  str: string = '';
  length: number = 2;

  sendData(value: string) {
    this.str = value;
  }
}
