export interface IEvent {
  name: string;
  description: string;
  date?: string;
}
export interface IStock {
  ticker: string;
  tradeName?: string;
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
  adjustRate?: number;
  adjustShares?: number;
  expires?: {
    date?: string;
    description?: string;
    remainingDays?: number;
  };
  divident?: boolean;
  earnings?: string;
  events?: IEvent[];
  strikeRate?: number;
  strike?: boolean;
  sellRate?: number;
  sell?: boolean;
  remainingDays?: number;
  ipo?: {
    date?: string;
    rate?: number;
    description?: string;
    remainingDays?: number;
  };
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
