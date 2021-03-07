export interface IEvent {
  name: string;
  description: string;
  date?: string;
}
export interface IStock {
  ticker: string;
  cost: number;
  count: number;
  max: number;
  min: number;
  position: boolean;
  mark?: number;
  lastPrice?: number;
  lowPrice?: number;
  highPrice?: number;
  high52Week?: number;
  low52Week?: number;
  totalVolume?: number;
  netChange?: number;
  longterm?: boolean;
  perShareProfit?: number;
  profit?: number;
  isProfit?: boolean;
  expires?: string;
  earnings?: string;
  events?: IEvent[];
}
export interface ITrade {
  name: string;
  owner: string;
  code: string;
  stocks: IStock[];
}

export interface IResponse {
  lastPrice: number;
  mark: number;
  lowPrice: number;
  highPrice: number;
  high52Week: number;
  low52Week: number;
  totalVolume: number;
  netChange: number;
  symbol: string;
}
