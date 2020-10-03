import { Component } from "@angular/core";
import { DataService } from "./services/data.services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  rjfArray = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((res) => {
      for (let area of res.data.areas)
        for (let section of area.sections)
          for (let rjf of section.rjf) this.rjfArray.push(rjf);
    });
  }
}
