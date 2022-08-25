import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  basicData: any;
  basicDataForVertical: any;
  basicOptions: any;
  horizontalOptions: any;
  data: any;
  chartOptions: any;
  deploymentStatus: DeployementStatus[] = [];
  constructor() { }

  ngOnInit(): void {
    this.basicDataForVertical = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#FFA726',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
    this.basicData = {
      labels: ['2020'],
      datasets: [
        {
          label: 'Project & Services',
          backgroundColor: '#134D93',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Fabrication',
          backgroundColor: '#2E7EE0 ',
          data: [70, 48, 40, 19, 86, 27, 90]
        },
        {
          label: 'Reduction',
          backgroundColor: '#59A1F9 ',
          data: [50, 48, 40, 19, 86, 27, 90]
        },
        {
          label: 'Utilities',
          backgroundColor: '#92BEF4 ',
          data: [40, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
    this.horizontalOptions = {
      indexAxis: 'y',
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };

    this.data = {
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726"
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D"
          ]
        }
      ]
    };
  }

}


export class DeployementStatus {
  incidentId: string = "INC001";
  preventiveId: string = "XXX1001";
  description: string = "Contract workmen of..";
  priority: string = "High";
  assignDate: string = "4/2/2021";
  status: string = "completed";
  remark: string = "when operator"
}