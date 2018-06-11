import { Component, OnInit } from '@angular/core';
​
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
​
export class ChartComponent implements OnInit {
  chart: Chart = {
    id:"chart-1",
    data: {
      type: 'bar',
      series: [
        {
          values: [1, 2, 3]
        }
      ]
    },
    height:400,
    width:400
  };
  constructor() { }
  ngAfterViewInit () {
    zingchart.render(this.chart)
    setTimeout(function(){ 
      zingchart.exec('chart-1', 'setseriesvalues', {
        plotindex : 0,
        values : [2,2,2]
    });
    }, 3000);
    zingchart.click = function(p) {
      alert("You clicked on the chart!");
    }
  }
  ngOnInit() {
  }
}