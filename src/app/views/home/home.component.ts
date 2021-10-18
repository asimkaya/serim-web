import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //burası kullanılmayacak
  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;

  isActiveMenu0: boolean = false;
  isActiveMenu1: boolean = false;
  isActiveMenu2: boolean = false;
  isActiveMenu3: boolean = false;

  newsInformationHeader: string = 'Teknoloji';
  newsInformationContent: string = 'Serim’den Yeni Nesil Biletleme Sistemi';
  newsHeaderColor: string = '#46c2ff';

  menuButtonClass: string = 'sidenav';

  constructor() {}

  ngOnInit(): void {
    this.jqueryModal();
  }

  jqueryModal() {
    ($('#carouselExampleIndicators1') as any).carousel();
  }

  navbarMenuClick(event: Event): void {
    let eventTarget: Element = event.target as Element;
    let elementId: string = eventTarget.id;
    let elementClass: string = eventTarget.className;

    elementId == 'navbarDropdown'
      ? (this.isActiveMenu0 = true)
      : (this.isActiveMenu0 = false);
    elementId == 'navbarDropdown1'
      ? (this.isActiveMenu1 = true)
      : (this.isActiveMenu1 = false);
    elementId == 'navbarDropdown2'
      ? (this.isActiveMenu2 = true)
      : (this.isActiveMenu2 = false);
    elementId == 'navbarDropdown3'
      ? (this.isActiveMenu3 = true)
      : (this.isActiveMenu3 = false);

    if (elementId == 'navbarDropdown') {
      elementClass == 'nav-link dropdown-toggle'
        ? (this.isActiveMenu0 = false)
        : (this.isActiveMenu0 = true);
    }
    if (elementId == 'navbarDropdown1') {
      elementClass == 'nav-link dropdown-toggle'
        ? (this.isActiveMenu1 = false)
        : (this.isActiveMenu1 = true);
    }
    if (elementId == 'navbarDropdown2') {
      elementClass == 'nav-link dropdown-toggle'
        ? (this.isActiveMenu2 = false)
        : (this.isActiveMenu2 = true);
    }
    if (elementId == 'navbarDropdown3') {
      elementClass == 'nav-link dropdown-toggle'
        ? (this.isActiveMenu3 = false)
        : (this.isActiveMenu3 = true);
    }
  }

  closeNav(): string {
    return (this.menuButtonClass = 'closeSideNav');
  }
  openNav(): string {
    return (this.menuButtonClass = 'openSideNav');
  }

  newsClick(element: string, color: string): void {
    this.newsInformationHeader = element;
    this.newsHeaderColor = color;
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  moveTo(index: number) {
    this.ds.moveTo(index);
  }
}
