import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-api",
  templateUrl: "./api.component.html",
  styleUrls: ["./api.component.css"]
})
export class ApiComponent implements OnInit {
  private playerUrl =
    "https://cricapi.com/api/playerFinder?apikey=NCLjHNTSaPVbjt66BSTdPdvG7Z72&name=";
  constructor(private http: HttpClient) {}
  playerInfo = [];
  searchPlayer(player) {
    this.http.get<any>(`${this.playerUrl}${player}`).subscribe(users => {
      this.playerInfo = users.data;
      console.log(users.data);
    });
  }

  ngOnInit() {}
}
