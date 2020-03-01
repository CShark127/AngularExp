import { Component, OnInit } from "@angular/core";
import { CoreDataService } from "../core-data.service";

@Component({
  selector: "app-stats-bar",
  templateUrl: "./stats-bar.component.html",
  styleUrls: ["./stats-bar.component.css"]
})
export class StatsBarComponent implements OnInit {
  constructor(private coreDataService: CoreDataService) {}

  darkTheme = this.coreDataService.darkTheme;
  darkThemeSubscriber = this.coreDataService.darkThemeChange.subscribe(
    value => (this.darkTheme = value)
  );

  blueHazeCount = this.coreDataService.blueHazeCount;
  distance = this.coreDataService.distance;
  lotMoves = this.coreDataService.lotMoves;
  moveRate = this.coreDataService.moveRate;

  ngOnInit(): void {}
}
