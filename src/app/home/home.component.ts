import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  menu_itens : MenuItem[] = [
    {name : 'Partini', link: 'home'},
    {name: 'Localização', link: 'local'},
    {name: 'Building', link: ''},
    {name: 'Project', link: 'project'},
    {name: 'Tenho Interesse', link: 'interest'}
  ];
  items = [
    'bliss',
    'natto',
    'near',
    'elev-jundiai',
    'liv',
  ];
  visibleItems: any[] = [];
  currentIndex = 0;

  ngOnInit() {
    this.updateVisibleItems();
  }

  updateVisibleItems() {
    this.visibleItems = this.items.slice(this.currentIndex, this.currentIndex + 3);
  }

  moveLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleItems();
    }
  }

  moveRight() {
    if (this.currentIndex < this.items.length - 3) {
      this.currentIndex++;
      this.updateVisibleItems();
    }
  }

}
