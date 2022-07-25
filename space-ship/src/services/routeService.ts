import { Injectable } from "@angular/core";

@Injectable()
export class RouteService {
  private typeRoute!: number;

  public setTypeRoute(type: number): void {
    this.typeRoute = type;
  }

  public getTypeRoute(): number {
    return this.typeRoute;
  }
}
