import { Component } from "@angular/core";
import { CoreDataService } from "./core-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private coreDateService: CoreDataService) {}

  darkTheme = this.coreDateService.darkTheme;
  darkThemeChange = this.coreDateService.darkThemeChange.subscribe(
    value => (this.darkTheme = value)
  );

  gridView = this.coreDateService.gridView;
  gridViewChange = this.coreDateService.gridViewChange.subscribe(
    value => (this.gridView = value)
  );
}
