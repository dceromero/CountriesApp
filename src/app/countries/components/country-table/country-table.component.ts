import { Component, Input } from '@angular/core';
import { CountryInterface } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: `
  img{
    width:25px;
    height:25px;
  }

  `
})
export class CountryTableComponent {

  @Input()
  public countries:CountryInterface[] =[];

}
