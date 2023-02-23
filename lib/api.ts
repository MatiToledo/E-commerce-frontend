export async function fetchAPI(path: RequestInfo, config: any) {
  let BASE_URL = "https://desafio-m9.vercel.app/api/";
  const url = BASE_URL + path;

  let call = await fetch(url, config);
  let res = await call.json();

  try {
    if (call.status >= 200 && call.status < 300) {
      return res;
    } else {
      throw {
        message: "Hubo un error",
        status: res.status,
      };
    }
  } catch (error) {
    console.error(error);
  }
}

export function saveToken(token: string) {
  localStorage.setItem("auth_token", token);
}

export function getSavedToken() {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const token = localStorage.getItem("auth_token");
    return token;
  }
}

export async function fetchApiPost(path: string, data?: any) {
  const token = getSavedToken();

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `bearer ${token}` : "",
    },
    body: JSON.stringify({ ...data }),
  };
  return await fetchAPI(path, config);
}
export async function fetchApiPatch(path: string, data?: any) {
  const token = getSavedToken();

  const config = {
    method: "PATCH",
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
  try {
    const sendCode = await fetchApiPost("auth", { email });
    console.log("SENDCODE", sendCode);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function authenticate(email: string, code: string) {
  try {
    const auth = await fetchApiPost("auth/token", {
      email,
      code: parseInt(code),
    });
    return auth;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getPagination() {
  const pagination = await fetchApiGet("search?q=hoodie&limit=10&offset=0");

  return pagination;
}

export async function modifyProfile(data: any) {
  try {
    const auth = await fetchApiPatch("me", data);
    return auth;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function startBuyItem(producId: string, additionalInfo?: any) {
  try {
    const order = fetchApiPost(`order?productId=${producId}`, additionalInfo);
    return order;
  } catch (error) {
    console.error(error);
    return false;
  }
}
