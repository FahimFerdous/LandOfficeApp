import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'displaylicenceholderinfo',
  templateUrl: './displaylicenceholderinfo.page.html',
  styleUrls: ['./displaylicenceholderinfo.page.scss'],
})
export class DisplaylicenceholderinfoPage implements OnInit {
   pourosovaId;
   hatId;
   licenceId;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.pourosovaId = this.route.snapshot.paramMap.get('pourosovaId');
    this.hatId = this.route.snapshot.paramMap.get('hatId');
    this.licenceId = this.route.snapshot.paramMap.get('licenceId');
    console.log(this.pourosovaId);
    console.log(this.hatId);
    console.log(this.licenceId);
  }

}
