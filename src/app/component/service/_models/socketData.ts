export class SocketData {
  Code: string="";
  Category?: string="";
  Description?: string="";
  Bid?: number=0;
  Ask?: number=0;
  askPercentChange: number=0;
  bidPercentChange?: number=0;
  Time:number= Date.now();
}
