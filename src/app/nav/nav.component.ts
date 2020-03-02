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
    this.coreDataService.eventEmitter(
      "change_theme",
      "change_theme",
      "change_theme"
    );
    this.coreDataService.changeTheme();
  }

  gamify = this.coreDataService.gamify;
  gamifySubscriber = this.coreDataService.gamifyChange.subscribe(
    value => (this.gamify = value)
  );
  changeGamify() {
    this.coreDataService.eventEmitter("gamify", "gamify", "gamify");
    this.coreDataService.changeGamify();
  }

  score = this.coreDataService.score;
  scoreSubscriber = this.coreDataService.scoreChange.subscribe(
    value => (this.score = value)
  );

  changeGridView() {
    this.coreDataService.eventEmitter("gridView", "gridView", "gridView");
    this.coreDataService.changeGridView();
  }

  statsView = this.coreDataService.statsView;
  statsViewSubscriber = this.coreDataService.statsViewChange.subscribe(
    value => (this.statsView = value)
  );
  changeStatsView() {
    this.coreDataService.eventEmitter("statsView", "statsView", "statsView");
    this.coreDataService.changeStatsView();
  }

  ngOnInit(): void {}
}
