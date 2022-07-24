export interface ShipLaunch {
  _id: string;
  name: string;
  description: string;
  fuelType: string;
  capacity: number;
  power: number;
  weight: number;
  createdOn: string;
  __v: number;
}

export interface ShipUnmanned {
  name: string;
  description: string;
  fuelType: string;
  speed: number;
  thrust: number;
  destination: string;
  createdOn: string;
}

export interface ShipManned {
  name: string;
  description: string;
  fuelType: string;
  weight: number;
  personAmount: number;
  use: string;
  createdOn: string;
}

export interface Ship {
  shipLaunch: Array<ShipLaunch>
  shipUnmanned: Array<ShipUnmanned>
  shipManned: Array<ShipManned>
}
