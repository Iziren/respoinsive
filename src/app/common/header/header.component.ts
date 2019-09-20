import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public changeHeaderColor() {
    const nav = document.getElementById("nav-link");
    if (this.router.url === "/") {
      if (document.body.scrollTop > 120) {
        nav.classList.add("indigo", "darken-4");
      } else {
        nav.classList.remove("indigo", "darken-4");
      }
    } else {
      nav.classList.add("indigo", "darken-4");
    }
  }

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.changeHeaderColor();
    });
  }

  @HostListener("body:scroll") windowResize() {
    this.changeHeaderColor();
  }

  ngOnInit() {
    this.changeHeaderColor();
  }
  scrollTo(id) {
    document.getElementById(id).scrollIntoView(true);
  }
  scrolljoin() {
    window.scrollTo({ top: 640, behavior: "smooth" });
  }
  scrollhow() {
    window.scrollTo({ top: 1361, behavior: "smooth" });
  }
  scrollcontact() {
    window.scrollTo({ top: 3873, behavior: "smooth" });
  }
  scrollabout() {
    window.scrollTo({ top: 1925, behavior: "smooth" });
  }
  scrolllogo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  scrollgetstarted() {
    window.scrollTo({ top: 690, behavior: "smooth" });
  }
}
