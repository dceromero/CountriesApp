import { Component } from '@angular/core';
import { SideBarInterface } from '../../interfaces/sidebar.interfaces';

@Component({
  selector: 'shared-siderbar',
  templateUrl: './siderbar.component.html',
})
export class SiderbarComponent {

  public getMenu:SideBarInterface[] = [
    // {
    //   url: 'home',
    //   name: 'Home Page'
    // },
    // {
    //   url: 'about',
    //   name: 'About'
    // },
    // {
    //   url: 'contact',
    //   name: 'Contact Page'
    // },
    {
      url: 'countries/by-capital',
      name: 'Por Capital'
    },
    {
      url: 'countries/by-country',
      name: 'Por Pais'
    },
    {
      url: 'countries/by-region',
      name: 'Por Region'
    }
  ]

}
