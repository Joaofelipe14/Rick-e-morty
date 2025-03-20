import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-rolar-para-topo',
  templateUrl: './rolar-para-topo.component.html',
  styleUrls: ['./rolar-para-topo.component.scss']
})
export class RolarParaTopoComponent {

    isScrolled: boolean = false;
  
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
      this.isScrolled = window.pageYOffset > 300;
    }
  
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

}
