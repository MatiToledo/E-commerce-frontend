export async function fetchAPI(path: RequestInfo, config: any) {
  let BASE_URL = "https://desafio-m9.vercel.app/api/";
  const url = BASE_URL + path;

  console.log("Config", config);

  try {
    let call = await fetch(url, config);
    console.log("CALL", call);
    let res = await call.json();
    console.log("RES", res);
    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      throw {
        message: "Hubo un error",
        status: res.status,
      };
    }
  } catch (error) {
    console.log(error);
  }
}

export function saveToken(token: string) {
  localStorage.setItem("auth_token", token);
}
export function getSavedToken() {
  return localStorage.getItem("auth_token");
}

export async function fetchApiPost(path: string, data: any) {
  const token = getSavedToken();
  const config = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `bearer ${token}` : "",
    },
    body: JSON.stringify({ ...data }),
  };
  return await fetchAPI(path, config);
}

export async function fetchApiGet(path: string) {
  const token = getSavedToken();
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `bearer ${token}` : "",
    },
  };
  return await fetchAPI(path, config);
}

export async function sendCode(email: string) {
  fetchApiPost("auth", { email });
  // fetchApiGet("products/type/Top");
}
