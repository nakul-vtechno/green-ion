import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public appPages = [
    {
      title: 'Home',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'login',
      url: '/user',
      icon: 'person'
    },
    {
      title: 'Signup',
      url: '/user/signup',
      icon: 'person'
    },
  ];

  constructor() { }

  ngOnInit() { }

}
