import { Component, OnInit, HostListener, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menu = '../../../assets/menu.svg';
  close = '../../../assets/close.svg';

  screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;
  show = true;
  hidden = false;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.onResize();
  }

  hide() {
    if (this.screenWidth >= 768) {
      return true;
    } else {
      return false;
    }
  }

  toggle() {
    this.show = !this.show;
    this.hidden = !this.hidden;
  }

  disappear() {
    if (this.hidden === true) {
      return 'none';
    } else {
      return 'block';
    }
  }

}
