import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() emitData: EventEmitter<any> = new EventEmitter();
  value: string = "";

  
  sendData(){
    document.getElementById('tvShowInput')?.focus();
    this.emitData.emit(this.value);
  }
}
