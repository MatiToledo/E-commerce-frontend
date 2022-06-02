export async function fetchAPI(path: RequestInfo, config: any) {
  let BASE_URL = "https://desafio-m9.vercel.app/api/";
  const url = BASE_URL + path;

  let call = await fetch(url, config);
  let res = await call.json();

  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    throw {
      message: "Hubo un error",
      status: res.status,
    };
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
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `bearer ${token}` : "",
    },
    body: JSON.stringify({ ...data }),
    mode: "no-cors",
  };
  return await fetchAPI(path, config);
}

export async function fetchApiGet(path: string, data: any) {
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
}
