import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { CoreDataService } from "../core-data.service";

export interface CarrierInfo {
  carrier: string;
  position: number;
  timeRemaining: number;
  destination: string;
  points: number;
}

/**
 * @title Table with sorting
 */
@Component({
  selector: "app-lot-table",
  templateUrl: "./lot-table.component.html",
  styleUrls: ["./lot-table.component.css"]
})
export class LotTableComponent implements OnInit {
  constructor(private coreDataService: CoreDataService) {}

  gamify = this.coreDataService.gamify;
  gamifySubscriber = this.coreDataService.gamifyChange.subscribe(
    value => (this.gamify = value)
  );

  ELEMENT_DATA: CarrierInfo[] = this.coreDataService.getLotList();
  lotListSubscriber = this.coreDataService.lotListChange.subscribe(
    value => (this.ELEMENT_DATA = value)
  );

  result = {};
  onClick(row) {
    this.result = row;
    if (row.carrier) {
      this.coreDataService.unloadCarrier(row.position);
      this.coreDataService.changeScore(row.points);
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    } else {
      this.coreDataService.loadCarrier(row.position);
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    }
  }

  displayedColumns: string[] = [
    "position",
    "carrier",
    "timeRemaining",
    "destination"
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
