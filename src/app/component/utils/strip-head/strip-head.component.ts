import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strip-head',
  templateUrl: './strip-head.component.html',
  styleUrls: ['./strip-head.component.scss']
})
export class StripHeadComponent implements OnInit {

    public now: Date = new Date();

    constructor() {
        setInterval(() => {
          this.now = new Date();
        }, 1);
    }

  ngOnInit(): void {
  }

}
