import { Component, OnInit, OnDestroy, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {
    // console.log(this.el.nativeElement);
  }
  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }


  onCloseClick() {
    this.close.emit();

  }
}
