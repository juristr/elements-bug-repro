import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private elRef: ElementRef) {}

  ngOnInit() {}

  ngOnDestroy() {
    const el = this.elRef.nativeElement.querySelector(
      'test-element'
    ) as HTMLElement;
    if (el) {
      console.log('removing element');
      el.remove();
    }
  }
}
