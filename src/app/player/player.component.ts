import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  private playerUrl =
    "https://cricapi.com/api/playerStats?apikey=NCLjHNTSaPVbjt66BSTdPdvG7Z72&pid=35320";
  constructor() {}

  ngOnInit() {}
}
