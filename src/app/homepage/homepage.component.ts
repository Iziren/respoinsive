import { Component, OnInit, ɵɵpureFunction6 } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
// import { Script } from 'vm';

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  videolist = [
    {
      name: "Item1",
      slug: "item1",
      embed: `6wD4V0rvlDI`
    }
  ];
  constructor(private Sanitizer: DomSanitizer) {}

  public changeheaderColor() {
    var nav = document.getElementById("nav");
    window.onscroll = function() {
      if (window.pageYOffset > 320) {
        nav.style.backgroundColor = "#1f3a6d";
      } else {
        nav.style.backgroundColor = "transparent";
      }
    };
  }

  ngOnInit() {
    this.changeheaderColor();
  }

  getembedurl(item) {
    return this.Sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/" + item.embed
    );
  }

  scrolljoin() {
    window.scrollTo({ top: 640, behavior: "smooth" });
  }
  scrollhow() {
    window.scrollTo({ top: 1351, behavior: "smooth" });
  }
  scrollcontact() {
    window.scrollTo({ top: 3863, behavior: "smooth" });
  }
  scrollabout() {
    window.scrollTo({ top: 1925, behavior: "smooth" });
  }
  scrolllogo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
   scrollgetstarted() {
    window.scrollTo({ top: 680, behavior: "smooth" });
  }
}
