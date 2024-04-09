import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountryInterface } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: CountryInterface;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private countryServivce: CountriesService
  ) {

  }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countryServivce.searchByCode(id))
      )
      .subscribe(resp => {
        if (!resp) this.router.navigateByUrl('');
        this.country = resp!;
      })
  }
}
