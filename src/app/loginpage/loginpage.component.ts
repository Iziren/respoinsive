import { HomepageComponent } from "./../homepage/homepage.component";
import { Component, OnInit } from "@angular/core";

import { Router, Routes, RouterModule, Scroll } from "@angular/router";
import { NgModule } from "@angular/core";

@Component({
  selector: "app-loginpage",
  templateUrl: "./loginpage.component.html",
  styleUrls: ["./loginpage.component.css"]
})
export class LoginpageComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  scrolljoin() {
    window.scrollTo({ top: 690, behavior: "smooth" });
    this.router.navigateByUrl("");
  }

  scrollcontact() {
    window.scrollTo({ top: 3873, behavior: "smooth" });
  }
  scrollabout() {
    window.scrollTo({ top: 1925, behavior: "smooth" });
  }
  scrollhow() {
    window.scrollTo({ top: 1361, behavior: "smooth" });
  }
}
