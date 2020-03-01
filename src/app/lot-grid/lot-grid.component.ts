import { Component, OnInit } from "@angular/core";
import { CoreDataService } from "../core-data.service";

@Component({
  selector: "app-lot-grid",
  templateUrl: "./lot-grid.component.html",
  styleUrls: ["./lot-grid.component.css"]
})
export class LotGridComponent implements OnInit {
  constructor(private coreDataService: CoreDataService) {}

  gamify = this.coreDataService.gamify;
  gamifySubscriber = this.coreDataService.gamifyChange.subscribe(
    value => (this.gamify = value)
  );

  lotList = this.coreDataService.lotList;
  lotListSubscriber = this.coreDataService.lotListChange.subscribe(
    value => (this.lotList = value)
  );

  result = {};
  onClick(row) {
    this.result = row;
    if (row.carrier) {
      this.coreDataService.unloadCarrier(row.position);
      this.coreDataService.changeScore(row.points);
    } else {
      this.coreDataService.loadCarrier(row.position);
    }
  }

  ngOnInit(): void {}
}
