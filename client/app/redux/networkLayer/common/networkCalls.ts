import { network } from "./network";

export function networkCallGet(path: string, params: any) {
  return network("").then((call) => {
    return call.get(path, { params });
  });
}

export function networkCallPost(path: string, data: any) {
  return network("").then((call) => {
    return call.post(path, data);
  });
}

export function networkCallPatch(path: string, data: any) {
  return network("").then((call) => {
    return call.patch(path, data);
  });
}

export function networkCallDelete(path: string, data: any) {
  return network("").then((call) => {
    return call.delete(path, data);
  });
}
