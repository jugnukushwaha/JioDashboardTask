import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }
  date= new Date();
  formattedDate= this.datePipe.transform(this.date,'dd.MMM.yyyy')

}
