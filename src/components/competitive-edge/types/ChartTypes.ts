
export interface BreakdownItem {
  name: string;
  value: number;
  explanation: string;
  fill?: string;
}

export interface ChartData {
  name: string;
  price: number;
  color: string;
  breakdown: BreakdownItem[];
}
