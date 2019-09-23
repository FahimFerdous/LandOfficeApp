import { Component, OnInit } from "@angular/core";
import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "digital-record-room",
  templateUrl: "./digital-record-room.page.html",
  styleUrls: ["./digital-record-room.page.scss"]
})
export class DigitalRecordRoomPage implements OnInit {
  url: SafeResourceUrl;
  constructor(sanitizer: DomSanitizer) {
    this.url = sanitizer.bypassSecurityTrustResourceUrl(
      "http://drr.land.gov.bd/"
    );
  }

  ngOnInit() {}
}
