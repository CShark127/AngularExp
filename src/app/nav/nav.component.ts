import { Component, OnInit } from "@angular/core";
import { CoreDataService } from "../core-data.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor(private coreDataService: CoreDataService) {}

  cartName = this.coreDataService.getCartName();
  changeTheme() {
    this.coreDataService.changeTheme();
  }

  gamify = this.coreDataService.gamify;
  gamifySubscriber = this.coreDataService.gamifyChange.subscribe(
    value => (this.gamify = value)
  );
  changeGamify() {
    this.coreDataService.changeGamify();
  }

  score = this.coreDataService.score;
  scoreSubscriber = this.coreDataService.scoreChange.subscribe(
    value => (this.score = value)
  );

  changeGridView() {
    this.coreDataService.changeGridView();
  }

  ngOnInit(): void {}
}
