import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, AfterViewInit {
  menuOpen = false;

  constructor() {}
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // JavaScript for handling sticky header
    const primaryHeader = document.querySelector('.primary-header');

    if (primaryHeader) {
      const scrollWatcher = document.createElement('div');
      scrollWatcher.setAttribute('data-scroll-watcher', '');
      primaryHeader.before(scrollWatcher);

      const navObserver = new IntersectionObserver(
        (entries) => {
          primaryHeader.classList.toggle(
            'sticking',
            !entries[0].isIntersecting
          );
        },
        { rootMargin: '10px 0px 0px 0px' }
      );

      navObserver.observe(scrollWatcher);
    }
  }
}
