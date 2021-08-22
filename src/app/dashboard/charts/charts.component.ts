import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  constructor() {
    
   }

  ngOnInit(): void {
  }
  
fromDate = moment().format('YYYY-MM-DD');
toDate=moment(this.fromDate).add(1,'year').format('YYYY-MM-DD');
  

  public doughnutChartLabels:Label[] = ['Before 09 - 10:30 AM', 
  'Before 10 - 10:30 AM', 
  'After 11 - 11:30 AM', 
  'After 11:30 - 12:00 PM',
  'After 12:00 PM'];
  public doughnutChartData : MultiDataSet= [
    [500,208,177,136,252],[]
  ];
  public doughnutChartType : any = "doughnut";
  
  public options: any={
        legend: {
            position: 'left',
            maxHeight:10,
            labels: {
              maxWidth: 10
            }
        },
        rotation:90
}
  public chartOneColors: Array<any> = [
    {
      
      backgroundColor: [
        "#9DBFF5",
        "#4386EF",
        "#1659C1",
        "#EDD412",
        "#F75F5F"
      ],
  
    }
  ];





  public chartType: any = 'bar';

  public chartDatasets: Array<any> = [
    // { data: [0,1,2,3,4,5,6,7,8,9,10],label: "Jugnu" , barThickness :3},
    {
      barThickness: 4,
      data : [0,0,0,1,0,10]
  },
  {
      barThickness: 4,
      data : [0,0,0,0,1]
  }
  ];
  public option: any={
    legend: {
        position: 'left',
        
    },
    scales: {
      y: {
        beginAtZero: true
      },
      xAxes: [{
          gridLines: {
              offsetGridLines: false
          }
      }],
      yAxes: [{
        gridLines: {
            offsetGridLines: false
        }
    }]
  }
}
  
  public chartLabels: Array<any> = ['00:30', '03:30', '06:30', '09:30', '13:30'];

  public chartColors: Array<any> = [
    {
      
      
      borderWidth: 1,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


}
