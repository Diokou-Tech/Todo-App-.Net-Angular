import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  
  isExtended : boolean = false;

  toggleMenu()
  {
    this.isExtended = !this.isExtended;
  }
}
