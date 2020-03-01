import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatSliderModule } from "@angular/material/slider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSortModule } from "@angular/material/sort";
import { MatBadgeModule } from "@angular/material/badge";
import { MatDividerModule } from "@angular/material/divider";
import { MatDialogModule } from "@angular/material/dialog";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavComponent } from "./nav/nav.component";
import { LotTableComponent } from "./lot-table/lot-table.component";
import { LotGridComponent } from "./lot-grid/lot-grid.component";
import { StatsBarComponent } from './stats-bar/stats-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LotTableComponent,
    LotGridComponent,
    StatsBarComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSortModule,
    MatBadgeModule,
    MatDividerModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
