import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu_itens : MenuItem[] = [
    {name : 'Partini', link: 'home'},
    {name: 'Localização', link: 'local'},
    {name: 'Building', link: ''},
    {name: 'Projeto', link: 'project'},
    {name: 'Tenho Interesse', link: 'interest'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
