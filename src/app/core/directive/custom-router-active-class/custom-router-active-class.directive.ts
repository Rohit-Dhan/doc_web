import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
@Directive({
    selector: '[appCustomRouterLinkActive]',
    standalone: false
})
export class CustomRouterActiveClassDirective {

  
  @Input() appCustomRouterLinkActive: string | string[] = ''; // Input for route
  @Input() activeClass: string | string[] = ''; // Class to add when route is active

  private routerSubscription!: Subscription;

  constructor(
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateActiveClass();
      });

    // Initial check when view is first rendered
    this.updateActiveClass();
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
  private updateActiveClass(): void {
    const currentUrl = this.router.url;

    const isActive = Array.isArray(this.appCustomRouterLinkActive)
      ? this.appCustomRouterLinkActive.some(route => currentUrl.includes(route))
      : currentUrl.includes(this.appCustomRouterLinkActive as string);

    if (isActive) {
      this.addClasses();
    } else {
      this.removeClasses();
    }
  }

  private addClasses(): void {
    const classes = Array.isArray(this.activeClass) ? this.activeClass : [this.activeClass];
    classes.forEach(className => {
      this.renderer.addClass(this.el.nativeElement, className);
    });
  }

  private removeClasses(): void {
    const classes = Array.isArray(this.activeClass) ? this.activeClass : [this.activeClass];
    classes.forEach(className => {
      this.renderer.removeClass(this.el.nativeElement, className);
    });
  }

  // private updateActiveClass(): void {
  //   const currentUrl = this.router.url;

  //   const isActive = Array.isArray(this.appCustomRouterLinkActive)
  //     ? this.appCustomRouterLinkActive.some(route => currentUrl.includes(route))
  //     : currentUrl.includes(this.appCustomRouterLinkActive as string);

  //   if (isActive) {
  //     this.renderer.addClass(this.el.nativeElement, this.activeClass);
  //   } else {
  //     this.renderer.removeClass(this.el.nativeElement, this.activeClass);
  //   }
  // }
}

