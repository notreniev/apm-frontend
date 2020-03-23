import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "apm-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements AfterViewInit, OnInit {
  active;

  @ViewChild("components")
  private components: ElementRef;

  @ViewChild("utilities")
  private utilities: ElementRef;

  @ViewChild("pages")
  private pages: ElementRef;

  public isCollapsedComponents = true;
  public isCollapsedUtilities = true;
  public isCollapsedPages = true;

  public isMenuCollapsed = false;

  constructor(private renderer: Renderer2, private router: Router) {}

  ngAfterViewInit() {
    // this.renderer.listen(
    //   this.components.nativeElement.parentNode,
    //   "click",
    //   () => {
    //     this.isCollapsedComponents = this.isCollapsedComponents ? true : false;
    //     this.isCollapsedUtilities = true;
    //     this.isCollapsedPages = true;
    //   }
    // );
    // this.renderer.listen(
    //   this.utilities.nativeElement.parentNode,
    //   "click",
    //   () => {
    //     this.isCollapsedComponents = true;
    //     this.isCollapsedUtilities = false;
    //     this.isCollapsedPages = true;
    //   }
    // );
    // this.renderer.listen(this.pages.nativeElement.parentNode, "click", () => {
    //   this.isCollapsedComponents = true;
    //   this.isCollapsedUtilities = true;
    //   this.isCollapsedPages = false;
    // });
  }

  /**
   * 
   *     
      const navItems = this.elRef.nativeElement.querySelectorAll('li')
      navItems.forEach(element => {
        const div = element.querySelector('div')
        if (div){
          const show = div.classList.contains('collapse')
          if (show){
            console.log(div)
            this.renderer.listen(this.components.nativeElement, 'click', () => {
              this.renderer.removeClass(this.utilities.nativeElement, 'show')
              this.renderer.removeClass(this.pages.nativeElement, 'show')      
              this.renderer.addClass(this.components.nativeElement, 'show')
              console.log('this1', div)
            })    
          }
        }
      });
  
   * 
   * 
   */

  ngOnInit(): void {}
}
