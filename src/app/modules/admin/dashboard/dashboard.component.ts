import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ApexNonAxisChartSeries, ApexPlotOptions, ApexChart, ChartComponent, ApexLegend, ApexAxisChartSeries, ApexStroke, ApexXAxis, ApexTooltip, ApexDataLabels, ApexYAxis, ApexFill, ApexGrid, ApexResponsive } from "ng-apexcharts";
import { DashboardService } from './services/dashboard.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DatePipe, formatDate } from '@angular/common';
import { filter } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SuccessRegistrationComponent } from './success-registration/success-registration.component';
import { MatDialog } from '@angular/material/dialog';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

export type ChartOptions3 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  fill: ApexFill;
  colors: string[];
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive | ApexResponsive[];
};
export type ChartOptions4 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  fill: ApexFill;
  colors: string[];
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive | ApexResponsive[];
};

export type ChartOptions5 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  fill: ApexFill;
  colors: string[];
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive | ApexResponsive[];
};

export type ChartOptions6 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  fill: ApexFill;
  colors: string[];
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive | ApexResponsive[];
};

export type ChartOptions7 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  fill: ApexFill;
  colors: string[];
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive | ApexResponsive[];
};

export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  fill: ApexFill;
  responsive: ApexResponsive | ApexResponsive[];
  stroke: ApexStroke;
};

interface Overview {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  selectedOption = 'overall';
  websiteControl:FormControl

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions3: Partial<ChartOptions3>;
  public chartOptions1: Partial<ChartOptions1>;
  public chartOptions2: Partial<ChartOptions2>;
  public chartOptions4: Partial<ChartOptions4>;
  public chartOptions5: Partial<ChartOptions5>;
  public chartOptions6: Partial<ChartOptions6>;
  public chartOptions7: Partial<ChartOptions7>;
public slidesStore = [
  {
    id:1,
    src:'assets/images/slider_card_1.png'

  },
  {
    id:2,
    src:'assets/images/slider_card_2.png'

  },
  {
    id:3,
    src:'assets/images/slider_card_2.png'

  },
   {
    id:4,
    src:'assets/images/slider_card_1.png'

  },

]

overviews: Overview[] = [
  {value: 'overall', viewValue: 'Overall'},
  {value: 'This Week', viewValue: 'This Week'},
  {value: 'This Month', viewValue: 'This Month'},
  {value: 'This Year', viewValue: 'This Year'},
];

form: FormGroup = new FormGroup({});
  constructor(
    public dialog: MatDialog,
  ) {
this.websiteControl = new FormControl(this.selectedOption)


    this.chartOptions = {
      series: [
        {
          name: "distibuted",
          data: [21, 22, 10, 28, 16, 21, 13, 30, 25]
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false
        },
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#FFDCDC",
        "#FFDCCA",
        "#D8FDEA",
        "#CBE9FF",
        "#FFF9D4",
        "#E6DDFF",
        "#F4FFCC",
        "#FFD3F9",
        "#D8F9FF"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        borderColor: "#f1f1f1"
      },
      xaxis: {
        categories: [
          ["BBPS"],
          ["Cash Management"],
          ["Transfer"],
          ["Gold"],
          ["Recharge"],
          ["AEPS"],
          ["Collect Money"],
          ["POS"],
          ["Human ATM"]
        ],
        labels: {
          
          style: {
            colors: [
             '#363636'
            ],
            fontSize: "12px"
          }
        }
      }
    };

    this.chartOptions3 = {
      series: [
        {
          name: "distibuted",
          data: [30, 18, 50, 28, 16, 18, 20, 30, 25]
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false
        },
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#FFDCDC",
        "#FFDCCA",
        "#D8FDEA",
        "#CBE9FF",
        "#FFF9D4",
        "#E6DDFF",
        "#F4FFCC",
        "#FFD3F9",
        "#D8F9FF"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        borderColor: "#f1f1f1"
      },
      xaxis: {
        categories: [
          ["BBPS"],
          ["Cash Management"],
          ["Transfer"],
          ["Gold"],
          ["Recharge"],
          ["AEPS"],
          ["Collect Money"],
          ["POS"],
          ["Human ATM"]
        ],
        labels: {
          
          style: {
            colors: [
             '#363636'
            ],
            fontSize: "12px"
          }
        }
      }
    };

    this.chartOptions1 = {
      series: [
        {
          name: "series1",
          data: [41, 40, 58, 51, 42],
          // color:'#008FFB'
        },
      ],
      chart: {
        height: 300,
        type: "line",
      
          zoom: {
          enabled: false
        },
        
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false
      },

      
   
      grid: {
        borderColor: "#f1f1f1"
      },
   
      stroke: {
        curve: "smooth",
        width: 3,
        dashArray: [0, 12, 0],
        colors: ['#97BCD9']
      },
  
      xaxis: {
        axisBorder: {
          show: true,
          color: "#f1f1f1"
        },

        labels: {
          show: false,
        
        },
        
        categories: [
          "",
        "Sale Deed",
        "Partition Deed",
        "Release deed",
        "Unit deed",
        ]
      },
      yaxis: [
        {
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: true,
            color: "#f1f1f1"
          },
       
       
        
        },
     
      ],
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        
    
      },

   
      legend:{
        show: true,
        floating: true,
        fontSize: "14px",
        fontWeight:'bold',
        position: "right",
        offsetX: -40,
        offsetY: -10,
        
      }

    };

    this.chartOptions4 = {
      series: [
        {
          name: "series1",
          data: [31, 10, 28, 51, 12],
          // color:'#008FFB'
        },
      ],
      chart: {
        height: 300,
        type: "line",
      
          zoom: {
          enabled: false
        },
        
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false
      },

      
   
      grid: {
        borderColor: "#f1f1f1"
      },
   
      stroke: {
        curve: "smooth",
        width: 3,
        dashArray: [0, 12, 0],
        colors: ['#97BCD9']
      },
  
      xaxis: {
        axisBorder: {
          show: true,
          color: "#f1f1f1"
        },

        labels: {
          show: false,
        
        },
        
        categories: [
          "",
        "Sale Deed",
        "Partition Deed",
        "Release deed",
        "Unit deed",
        ]
      },
      yaxis: [
        {
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: true,
            color: "#f1f1f1"
          },
       
       
        
        },
     
      ],
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        
    
      },

   
      legend:{
        show: true,
        floating: true,
        fontSize: "14px",
        fontWeight:'bold',
        position: "right",
        offsetX: -40,
        offsetY: -10,
        
      }

    };

    this.chartOptions5 = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42],
          // color:'#008FFB'
        },
      ],
      chart: {
        height: 300,
        type: "line",
      
          zoom: {
          enabled: false
        },
        
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false
      },

      
   
      grid: {
        borderColor: "#f1f1f1"
      },
   
      stroke: {
        curve: "smooth",
        width: 3,
        dashArray: [0, 12, 0],
        colors: ['#97BCD9']
      },
  
      xaxis: {
        axisBorder: {
          show: true,
          color: "#f1f1f1"
        },

        labels: {
          show: false,
        
        },
        
        categories: [
          "",
        "Sale Deed",
        "Partition Deed",
        "Release deed",
        "Unit deed",
        ]
      },
      yaxis: [
        {
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: true,
            color: "#f1f1f1"
          },
       
       
        
        },
     
      ],
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        
    
      },

   
      legend:{
        show: true,
        floating: true,
        fontSize: "14px",
        fontWeight:'bold',
        position: "right",
        offsetX: -40,
        offsetY: -10,
        
      }

    };

    this.chartOptions6 = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42],
          // color:'#008FFB'
        },
      ],
      chart: {
        height: 300,
        type: "line",
      
          zoom: {
          enabled: false
        },
        
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false
      },

      
   
      grid: {
        borderColor: "#f1f1f1"
      },
   
      stroke: {
        curve: "smooth",
        width: 3,
        dashArray: [0, 12, 0],
        colors: ['#97BCD9']
      },
  
      xaxis: {
        axisBorder: {
          show: true,
          color: "#f1f1f1"
        },

        labels: {
          show: false,
        
        },
        
        categories: [
          "",
        "Sale Deed",
        "Partition Deed",
        "Release deed",
        "Unit deed",
        ]
      },
      yaxis: [
        {
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: true,
            color: "#f1f1f1"
          },
       
       
        
        },
     
      ],
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        
    
      },

   
      legend:{
        show: true,
        floating: true,
        fontSize: "14px",
        fontWeight:'bold',
        position: "right",
        offsetX: -40,
        offsetY: -10,
        
      }

    };

  

    this.chartOptions2 = {
      series: [75],
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#F8F9FD",
            image: undefined,
            position: "front",
            dropShadow: {
              enabled: false,
              top: 1,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "70%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: false,
              top: 1,
              left: -2,
              blur: 1,
              opacity: 0.3
            }
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "17px"
            },
            value: {
              formatter: function(val) {
                return parseInt(val.toString(), 10).toString();
              },
              color: "#111",
              fontSize: "36px",
              show: true
            }
          }
        }
      },
      fill: {
        colors: ['#2E3690']
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Cashin"]
    };
  }


  ngOnInit() {
    this.successPopup()
    this.chartOptions7 = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42],
          // color:'#008FFB'
        },
      ],
      chart: {
        height: 300,
        type: "line",
      
          zoom: {
          enabled: false
        },
        
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false
      },

      
   
      grid: {
        borderColor: "#f1f1f1"
      },
   
      stroke: {
        curve: "smooth",
        width: 3,
        dashArray: [0, 12, 0],
        colors: ['#97BCD9']
      },
  
      xaxis: {
        axisBorder: {
          show: true,
          color: "#f1f1f1"
        },

        labels: {
          show: false,
        
        },
        
        categories: [
          "",
        "Sale Deed",
        "Partition Deed",
        "Release deed",
        "Unit deed",
        ]
      },
      yaxis: [
        {
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: true,
            color: "#f1f1f1"
          },
       
       
        
        },
     
      ],
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        
    
      },

   
      legend:{
        show: true,
        floating: true,
        fontSize: "14px",
        fontWeight:'bold',
        position: "right",
        offsetX: -40,
        offsetY: -10,
        
      }

    };
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin:10,
    navSpeed: 700,
    navText: ['<span class="che"></span>', '<span class="che-right"></span>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2.5
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  successPopup() {
    this.dialog.open(SuccessRegistrationComponent, {
      width: '400px',
      disableClose: true
    });
  }


}