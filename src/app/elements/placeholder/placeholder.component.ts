import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {

  @Input() header: boolean = true;
  @Input() lines = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
