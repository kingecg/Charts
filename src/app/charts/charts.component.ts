import { Component, OnInit, Input , ViewChild, ElementRef} from '@angular/core';
import * as echarts from "echarts";
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Input() content: string
  id:string
  @ViewChild('.chartInstance') chartDiv:ElementRef
  constructor() { 
    this.id="echarts_"+Date.now()
  }

  ngOnInit() {
    const self=this;
    setTimeout(()=>{
      echarts.init(<HTMLDivElement>this.chartDiv.nativeElement)
    },100)
   
  }

}
