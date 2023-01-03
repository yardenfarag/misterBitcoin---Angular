import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) {}
  barData: any
  pieData:any

  ngOnInit() {
    const barData = this.bitcoinService.getMarketPrice()
    barData.then(res => {
      this.barData = res.values.map((val:any)=> {
        return {name: new Date(val.x *  1000).toLocaleDateString('he-IL', {timeZone:'Asia/Jerusalem'}).replace(/\D/g,'/'), value:val.y}
      })
      this.barData = this.barData.splice(118)
    })

    const pieData = this.bitcoinService.getConfirmedTransactions()
    pieData.then(res => {
      this.pieData = res.values.map((val:any)=> {
        return {name: new Date(val.x *  1000).toLocaleDateString('he-IL', {timeZone:'Asia/Jerusalem'}).replace(/\D/g,'/'), value:val.y}
      })
      this.pieData = this.pieData.splice(118)
    })
    
  }
}
