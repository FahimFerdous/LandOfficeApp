import { Component, OnInit } from "@angular/core";
import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "uttaradhikari-calculator",
  templateUrl: "./uttaradhikari-calculator.page.html",
  styleUrls: ["./uttaradhikari-calculator.page.scss"]
})
export class UttaradhikariCalculatorPage implements OnInit {
  url: SafeResourceUrl;
  constructor(sanitizer: DomSanitizer) {
    this.url = sanitizer.bypassSecurityTrustResourceUrl(
      "http://উত্তরাধিকার.বাংলা/"
    );
  }

  ngOnInit() {}
}
