import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-fix-footer',
  templateUrl: './fix-footer.component.html',
  styleUrls: ['./fix-footer.component.scss']
})
export class FixFooterComponent implements OnInit {
  showScroll?: boolean ;
  showScrollHeight = 200;
  hideScrollHeight = 200;

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) > this.showScrollHeight
    ) {
      debugger;
      this.showScroll = true;
    } else if (
      this.showScroll &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) < this.hideScrollHeight
    ) {
      debugger;
      this.showScroll = false;
    }
  }

  ngOnInit() {}

  scrollToTop() {
    (function smoothscroll() {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 5);
      }
    })();
  }

}
