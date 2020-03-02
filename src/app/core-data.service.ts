import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

declare let gtag: Function;

@Injectable({
  providedIn: "root"
})
export class CoreDataService {
  cartName: string = "WTA Cart Alpha";
  supervisorEmailAddress = "supervisor@GenericSemiCo.com";

  destinationList = [
    "PHOTO",
    "FILMS",
    "BOND",
    "CMP",
    "IMPLANT",
    "METALS",
    "ETCH",
    "DIFFUSION"
  ];
  priorityList = [1, 2, 3];
  lotPrefixList = ["AA", "BA", "DD", "FQ", "LT", "XD", "AH"];

  darkTheme = false;
  darkThemeChange: Subject<boolean> = new Subject<boolean>();
  changeTheme() {
    this.darkThemeChange.next(!this.darkTheme);
  }

  gamify = false;
  gamifyChange: Subject<boolean> = new Subject<boolean>();
  changeGamify() {
    this.gamifyChange.next(!this.gamify);
  }

  score = 0;
  scoreChange: Subject<number> = new Subject<number>();
  changeScore(points) {
    this.scoreChange.next(this.score + points);
  }

  gridView = false;
  gridViewChange: Subject<boolean> = new Subject<boolean>();
  changeGridView() {
    this.gridViewChange.next(!this.gridView);
  }

  statsView = false;
  statsViewChange: Subject<boolean> = new Subject<boolean>();
  changeStatsView() {
    this.statsViewChange.next(!this.statsView);
  }

  blueHazeCount = this.getRandomInt(15, 55);
  distance = Math.round(Math.random() * 100) / 100;
  lotMoves = this.getRandomInt(50, 99);
  moveRate = this.getRandomInt(10, 25);

  lotList = this.createInitialLotList();
  lotListChange: Subject<any> = new Subject<any>();
  unloadCarrier(position) {
    this.lotList[position - 1] = {
      position: position,
      carrier: null,
      timeRemaining: null,
      destination: null,
      points: null,
      priority: null
    };
    this.lotListChange.next(this.lotList);
  }

  loadCarrier(position) {
    this.lotList[position - 1] = {
      position: position,
      carrier: this.createLotId(),
      timeRemaining: this.getRandomInt(2, 30),
      destination: this.getRandomDestination(),
      points: this.getRandomInt(1, 12),
      badgeColor: "gold",
      priority: 1
    };
    this.lotListChange.next(this.lotList);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getRandomPrefix() {
    return this.lotPrefixList[this.getRandomInt(0, this.lotPrefixList.length)];
  }

  getRandomLotNumber() {
    const lotNumberMin = 1000;
    const lotNumberMax = 9999;
    return this.getRandomInt(lotNumberMin, lotNumberMax);
  }

  createLotId() {
    const lotPrefix = this.getRandomPrefix();
    const lotNumber = this.getRandomLotNumber();
    return lotPrefix + lotNumber;
  }

  getRandomDestination() {
    return this.destinationList[
      this.getRandomInt(0, this.destinationList.length)
    ];
  }

  createInitialLotList() {
    const numberOfLots = 12;
    let lotList = [];
    for (let i = 1; i <= numberOfLots; i++) {
      if (this.getRandomInt(0, 100) <= 50) {
        let lot = {
          position: i,
          carrier: this.createLotId(),
          timeRemaining: this.getRandomInt(2, 30),
          destination: this.getRandomDestination(),
          points: this.getRandomInt(1, 12),
          badgeColor: "gold",
          priority: 1
        };
        lotList.push(lot);
      } else {
        let lot = {
          position: i,
          carrier: null,
          timeRemaining: null,
          destination: null,
          points: null,
          badgeColor: null,
          priority: null
        };
        lotList.push(lot);
      }
    }
    return lotList;
  }

  getCartName() {
    return this.cartName;
  }

  getLotList() {
    return this.lotList;
  }

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null
  ) {
    gtag("event", eventName, {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }

  constructor() {
    this.darkThemeChange.subscribe(value => {
      this.darkTheme = value;
    });
    this.gamifyChange.subscribe(value => {
      this.gamify = value;
    });
    this.scoreChange.subscribe(value => {
      this.score = value;
    });
    this.gridViewChange.subscribe(value => {
      this.gridView = value;
    });
    this.statsViewChange.subscribe(value => {
      this.statsView = value;
    });
    this.lotListChange.subscribe(value => {
      this.lotList = value;
    });
  }
}
