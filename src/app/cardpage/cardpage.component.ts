import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
// import { UsersService } from '../shared/users.service';
import { Users } from "../shared/users.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-cardpage",
  templateUrl: "./cardpage.component.html",
  styleUrls: ["./cardpage.component.css"]
  // providers :[UsersServ]

  // declare var M: any;

  // @Component({
  //   selector: 'app-cardpaymentpage',
  //   templateUrl: './cardpaymentpage.component.html',
  //   styleUrls: ['./cardpaymentpage.component.css']
})
export class CardpageComponent implements OnInit {
  price = 0;
  subname = "";

  //   constructor(private usersService: UsersService, private Activatedroute:ActivatedRoute,
  //     private router:Router){
  // }

  constructor(private Activatedroute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.Activatedroute.queryParamMap.subscribe(params => {
      this.price = +params.get("sub") || 0;
      console.log("Query params ", this.price);
    });
    if (this.price == 1500) {
      this.subname = "BOSS";
      document.getElementById("button1").style.backgroundColor = "#98afc7";
      this.amount = this.price / 1000;
    } else if (this.price == 2500) {
      this.subname = "EXECUTIVE";
      document.getElementById("button2").style.backgroundColor = "#98afc7";
      this.amount = this.price / 1000;
    } else if (this.price == 5000) {
      this.subname = "PRESIDENT";
      document.getElementById("button3").style.backgroundColor = "#98afc7";
      this.amount = this.price / 1000;
    }

    /* this.Activatedroute.queryParamMap
          .subscribe(params => { 
            this.name = +params.get('subname')||0;
            console.log('Query params ',this.name) 
        });   */

    //this.resetForm();
    // this.refreshUsersList();
  }

  confirmPayment(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Payment was succesful");
    console.log(event);
  }

  cancelledPayment() {
    console.log("Cancel was selected");
  }

  /* resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.usersService.selectedUsers = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null
    }
  } */
  validation() {
    console.log("This fires after the first event.This is the validation fn");
  }

  onSubmit(form: NgForm) {
    console.log("This form was submitted");
    this.validation();
  }
  //   if (form.value._id == "") {
  //     this.usersService.postUsers(form.value).subscribe((res) => {
  //       //this.resetForm(form);
  //       this.refreshUsersList();
  //       M.toast({ html: 'Saved successfully', classes: 'rounded' });
  //     });
  //   }
  //   else {
  //     this.usersService.putUsers(form.value).subscribe((res) => {
  //       //this.resetForm(form);
  //       this.refreshUsersList();
  //       M.toast({ html: 'Updated successfully', classes: 'rounded' });
  //     });
  //   }
  // }

  // cancelledPayment(): void {
  //   console.log("close");
  // }

  // generateReference(): string {
  //   let text = "";
  //   const possible =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   for (let i = 0; i < 10; i++) {
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   }

  //   return text;

  // refreshUsersList() {
  //   this.usersService.getUsersList().subscribe((res) => {
  //     this.usersService.users = res as Users[];
  //   });
  // }

  // onEdit(usrs: Users) {
  //   this.usersService.selectedUsers= usrs;
  // }

  // onDelete(_id: string, form: NgForm) {
  //   if (confirm('Are you sure to delete this record ?') == true) {
  //     this.usersService.deleteUsers(_id).subscribe((res) => {
  //       this.refreshUsersList();
  //       //this.resetForm(form);
  //       M.toast({ html: 'Deleted successfully', classes: 'rounded' });
  //     });
  //   }

  // }

  pagePrice1: number;
  amount: number;
  buttonclicked = false;
  buttonclicked1;
  currency = "USD";
  sentence: string;
  buttonclicked5 = false;

  Boss1(event) {
    this.buttonclicked = true;
    this.pagePrice1 = 540000;
    this.amount = 1500 / 1000;
    event.target.style["background-color"] = "#98afc7";
    console.log(event.target.style["background-color"]);
    document.getElementById("button2").style.backgroundColor = "#f2f2f2";
    document.getElementById("button3").style.backgroundColor = "#f2f2f2";
    this.buttonclicked1 == false;
  }

  Executive1(event) {
    this.buttonclicked = true;
    this.pagePrice1 = 900000;
    this.amount = 2500 / 1000;
    event.target.style["background-color"] = "#98afc7";

    document.getElementById("button1").style.backgroundColor = "#f2f2f2";
    document.getElementById("button3").style.backgroundColor = "#f2f2f2";
  }

  d() {
      document.getElementById("disappear1").style.display = "none";
    document.getElementById("disappear2").style.display = "none";
    document.getElementById("disappear3").style.display = "none";
    document.getElementById("cancel").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    this.buttonclicked5 = true;
    this.sentence =
      "You have officially subscribed to our newsletter. Thankyou!";
  }
  President1(event) {
    this.buttonclicked = true;
    this.pagePrice1 = 1800000;
    this.amount = 5000 / 1000;
    event.target.style["background-color"] = "#98afc7";

    document.getElementById("button1").style.backgroundColor = "#f2f2f2";
    document.getElementById("button2").style.backgroundColor = "#f2f2f2";
  }

  function5(event) {
    if (this.buttonclicked1 == true) {
      {
        {
          this.amount = this.amount * 360;
          this.currency = "NGN";
        }
      }

      this.buttonclicked1 = false;
    } else {
      this.buttonclicked1 = false;
      {
        {
          this.amount = this.amount * 360;
          this.currency = "NGN";
        }
      }
    }
  }
}
