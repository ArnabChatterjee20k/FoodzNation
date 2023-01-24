import AsyncStorage from "@react-native-async-storage/async-storage";

const storageKey = "@DELIVAROO_TOKEN";
const url = "http://192.168.43.175:3000";
export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem(storageKey, token);
  } catch (e) {
    console.log("Some problem occured while saving token");
    console.log(e);
  }
};
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(storageKey);
    return token;
  } catch (error) {
    console.log("Some problem occured while getting token");
    console.log(e);
  }
};
export const removeToken = async () => {
  const token = await AsyncStorage.removeItem(storageKey);
  console.log({ token });
};

export const fetchOrders = async () => {
  const token = await getToken();
  const req = await fetch(`${url}/order`, {
    headers: {
      token: token,
    },
  });
  const data = await req.json();
  return data;
};

export const createUser = async ({ body }) => {
  const token = await getToken();
  const req = await fetch(`${url}/user`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      token: token,
    },
  });
  const data = await req.json();
  return data;
};

export const loginUser = async ({ email, password }) => {
  const endpoingt = new URL(`${url}/user`);
  endpoingt.searchParams.append("email", email);
  endpoingt.searchParams.append("password", password);
  const res = await fetch(endpoingt.href);
  if (!res.ok) {
    throw new Error(res.status);
  }
  const { token } = await res.json();
  return token;
};

export const handleFetchError = (errorCode) => {
  switch (errorCode) {
    case 403:
      return "Bad Authentication"
      break;
    case 404:
      return "User Not Found"
      break;
    default:
      return "Some Problem Occured"
      break;
  }
};
