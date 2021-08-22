import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private datePipe: DatePipe){}
  title = 'JioDashboard';
  DayNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  date= new Date();
  dateMonth=this.DayNames[this.date.getDay()];
  formattedDate= this.datePipe.transform(this.date,'dd.MMM.yyyy');
}
