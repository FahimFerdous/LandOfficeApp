import { Component, OnInit } from "@angular/core";
import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "update",
  templateUrl: "./update.page.html",
  styleUrls: ["./update.page.scss"]
})
export class UpdatePage implements OnInit {
  url: SafeResourceUrl;
  constructor(sanitizer: DomSanitizer) {
    this.url = sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.land.gov.bd/application"
    );
  }

  ngOnInit() {}
}
