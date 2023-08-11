"use client";
import axios from "axios";
import Cookie from "js-cookie";

function prepareEnvironmentUrl(val: string) {
  switch (val) {
    case "prod":
      return "http://localhost:8080/";
    case "local":
      return "http://localhost:8080/";
    default:
      break;
  }
}

const BASE_URL = prepareEnvironmentUrl("local");

function isStatusValid(status: number): boolean {
  return status >= 200 && status <= 300;
}

export function network(contentType: string) {
  const userToken = Cookie.get("token");
  return Promise.resolve(
    axios.create({
      baseURL: BASE_URL,
      validateStatus: (status) => {
        return isStatusValid(status);
      },
      headers: {
        "Content-Type": contentType ? contentType : "application/json",
        Authorization: userToken ? `Bearer ${userToken}` : "",
      },
    })
  );
}
