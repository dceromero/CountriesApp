import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {
    
  private debouncer:Subject<string> = new Subject();

  private deboucerSucripcion?:Subscription;
  
  @Input()
  public placeHolder: string = '';

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {
   this.deboucerSucripcion = this.debouncer
    .pipe(
      debounceTime(1000)
    )
    .subscribe(value =>{
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.deboucerSucripcion?.unsubscribe();
  }

  EmitValue(value: string): void {
    if (value.length === 0) return;
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
      this.debouncer.next(searchTerm);
  }
}
