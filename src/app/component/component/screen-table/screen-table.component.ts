import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeProvider } from '../../service/home.provider';
import { CATEGORYTYPE } from '../../service/_models/categoryType';
import { SocketData } from '../../service/_models/socketData';

@Component({
  selector: 'app-screen-table',
  templateUrl: './screen-table.component.html',
  styleUrls: ['./screen-table.component.scss']
})
export class ScreenTableComponent implements OnInit {


  isClicked: boolean = false;
  currencyList: SocketData[] = [];
  goldList: SocketData[] = [];
  socketDataList: SocketData[] = [];
  parityList: SocketData[] = [];
  gramList: SocketData[] = [];
  otherList: SocketData[] = [];

  dataListReplace1: SocketData[] = [];
  dataListReplace2: SocketData[] = [];
  dataListReplace3: SocketData[] = [];
  dataListReplace4: SocketData[] = [];
  dataListReplace5: SocketData[] = [];

  code: string = 'USDTRY';
  private subscriptions = new Subscription();
  public pingStatus = true;
  RETRY_SECONDS = 30;
  timer: any;
  interval: any;

  constructor(private renderer: Renderer2,
              private wsService: HomeProvider,
              @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {

    this.elem = document.documentElement;
    this.interval = setInterval(() => {
      if (this.pingStatus === false) {
        this.subscriptions.unsubscribe();
        this.subscriptions = new Subscription();
        this.getData();
      }
    }, this.RETRY_SECONDS * 1000);
    this.getData();
  }

  getData() {
    this.wsService.initSocket();
    this.subscriptions.add(this.wsService.connectWebSocket().subscribe((Sdata: SocketData[]) => {
        clearTimeout(this.timer);
        this.pingStatus = true;
        this.socketDataList = Sdata;
        this.filterData();
        this.timer = setTimeout(() => {
          this.pingStatus = false;
        }, 2000);
      },
      (err) => {
        this.pingStatus = true;
      },
      () => {
        this.pingStatus = false;
      }));
  }

  trackByPrice(index: number, code:any) {
    return code.Ask;
  }




  filterData() {
    if (this.currencyList) {
      this.currencyList = [];
    }
    if(this.gramList){
      this.gramList =[];
    }
    if (this.goldList) {
      this.goldList = [];
    }
    if (this.parityList) {
      this.parityList = [];
    }
    if (this.otherList) {
      this.otherList = [];
    }
    this.socketDataList.forEach((item, index) => {
      if (item.Category === CATEGORYTYPE.GRAM_ALTIN) {
        this.currencyList.push(item);
      } else if (item.Category === CATEGORYTYPE.SARRAFIYE_ESKI_TARIHLI) {
        this.goldList.push(item);
      } else if (item.Category === CATEGORYTYPE.GENEL) {
        this.parityList.push(item);
      }
       else {
        this.otherList.push(item);
      }
    });
    if (this.dataListReplace1.length !== 0) {
      if (JSON.stringify(this.dataListReplace1) === JSON.stringify(this.currencyList)) {

      } else {
        this.currencyList.forEach((data, index) => {
          if (data.Ask !== this.dataListReplace1[index].Ask) {
            this.percentChange(data, this.dataListReplace1[index], index);
          } else {
            data.askPercentChange = 0.00;
            this.dataListReplace1[index].askPercentChange = data.askPercentChange;
          }
        });
      }
    } else {
      this.dataListReplace1 = this.currencyList;
    }
    if (this.dataListReplace2.length !== 0) {
      if (JSON.stringify(this.dataListReplace2) === JSON.stringify(this.goldList)) {

      } else {
        this.goldList.forEach((data, index) => {
          if (data.Ask !== this.dataListReplace2[index].Ask) {
            this.percentChange(data, this.dataListReplace2[index], index);
          } else {
            if (data.askPercentChange) {
              this.dataListReplace2[index].askPercentChange = data.askPercentChange;
            } else {
              data.askPercentChange = 0.00;
              this.dataListReplace2[index].askPercentChange = data.askPercentChange;
            }
          }
        });
      }
    } else {
      this.dataListReplace2 = this.goldList, this.gramList;
    }
    if (this.dataListReplace3.length !== 0) {
      if (JSON.stringify(this.dataListReplace3) === JSON.stringify(this.parityList)) {

      } else {
        this.parityList.forEach((data, index) => {
          if (data.Ask !== this.dataListReplace3[index].Ask) {
            this.percentChange(data, this.dataListReplace3[index], index);
          } else {
            if (data.askPercentChange) {
              this.dataListReplace3[index].askPercentChange = data.askPercentChange;
            } else {
              data.askPercentChange = 0.00;
              this.dataListReplace3[index].askPercentChange = data.askPercentChange;
            }
          }
        });
      }
    } else {
      this.dataListReplace3 = this.parityList;
    }
    if (this.dataListReplace3.length !== 0) {
      if (JSON.stringify(this.dataListReplace3) === JSON.stringify(this.parityList)) {

      } else {
        this.parityList.forEach((data, index) => {
          if (data.Ask !== this.dataListReplace3[index].Ask) {
            this.percentChange(data, this.dataListReplace3[index], index);
          } else {
            if (data.askPercentChange) {
              this.dataListReplace3[index].askPercentChange = data.askPercentChange;
            } else {
              data.askPercentChange = 0.00;
              this.dataListReplace3[index].askPercentChange = data.askPercentChange;
            }
          }
        });
      }
    } else {
      this.dataListReplace3 = this.parityList;
    }



    if (this.dataListReplace4.length !== 0) {
      if (JSON.stringify(this.dataListReplace4) === JSON.stringify(this.otherList)) {

      } else {
        this.otherList.forEach((data, index) => {
          if (data.Ask !== this.dataListReplace4[index].Ask) {
            this.percentChange(data, this.dataListReplace4[index], index);
          } else {
            if (data.askPercentChange) {
              this.dataListReplace4[index].askPercentChange = data.askPercentChange;
            } else {
              data.askPercentChange = 0.00;
              this.dataListReplace4[index].askPercentChange = data.askPercentChange;
            }
          }
        });
      }
    } else {
      this.dataListReplace4 = this.otherList;
    }
  }


  /**
   * WS'den gelen fiyat farklılıklarını hesaplayan fonksiyon
   * @param newData
   * @param oldData
   */

  percentChange(newData:any, oldData:any, index:any) {
    if (newData.Ask != oldData.Ask) {
      let oldAskPrice = +oldData.Ask;
      let newAskPrice = +newData.Ask;
      let askPriceDifference = (1 - (oldAskPrice / newAskPrice)) * 100;
      newData.askPercentChange = +askPriceDifference.toFixed(2);
      newData.Time = Date.now();
      if (askPriceDifference < 0) {
        const code = newData.Code;
        const element = document.getElementById(code);
      } else if (askPriceDifference > 0) {
        const code = newData.Code;
        const element = document.getElementById(code);
      }
    }
  }


  toggle(socketData: SocketData) {
    this.code = socketData.Code;
  }







  elem:any;
  toggleClass = 'ft-maximize';

  public config: any = {};




  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.closeFullscreen();
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
      this.toggleClass = 'ft-minimize';
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
      this.toggleClass = 'ft-minimize';
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
      this.toggleClass = 'ft-minimize';
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
      this.toggleClass = 'ft-minimize';
    }
  }

  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
      this.toggleClass = 'ft-maximize';
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
      this.toggleClass = 'ft-maximize';
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
      this.toggleClass = 'ft-maximize';
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
      this.toggleClass = 'ft-maximize';
    }
  }
}
