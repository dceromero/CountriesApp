import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryInterface } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})


export class ByRegionPageComponent {
  constructor(private countriesService: CountriesService) { }

  public regions: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  public countries: CountryInterface[] = []
  
  public selectedRegion:string ='';

  searchByRegion(value: string): void {
    this.selectedRegion = value;
    if (value.length === 0) return;
    this.countriesService.searchByRegion(value).subscribe(x => this.countries = [...x]);
  }
}
