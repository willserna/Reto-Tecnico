import { HttpParams } from "@angular/common/http";

export const getParameters = (payload: any): HttpParams => {
  let params = new HttpParams();
  Object.keys(payload).forEach(
    key => (params = params.set(key, payload[key]))
  );
  return params;
};
