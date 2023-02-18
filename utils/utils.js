import AsyncStorage from "@react-native-async-storage/async-storage";

const storageKey = "@DELIVAROO_TOKEN";
const url = "http://192.168.0.138:3000";
export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem(storageKey, token);
  } catch (e) {
  console.log("🚀 ~ file: utils.js:9 ~ setToken ~ e", e)
  }
};
export const getToken = async () => {
    const token = await AsyncStorage.getItem(storageKey);
    return token;
  }

export const removeToken = async () => {
  const token = await AsyncStorage.removeItem(storageKey);
  console.log("🚀 ~ file: utils.js:19 ~ removeToken ~ token", token)
  
  return "Success"
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

export const createUser = async ( body ) => {
  const token = await getToken();
  const req = await fetch(`${url}/user`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      token: token,
      'Content-type':'application/json'
    },
  });
  const data = await req.json();
  if(!req.ok){
    throw new Error(req.status)
  }
  await setToken(data)
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
  await setToken(token)
  return token;
};

export const getOrders = async()=>{
  const endpoint = new URL(`${url}/order`)
  const token = await getToken()
  let headersList = {
    "token": token
   }
   
   let res = await fetch(endpoint, { 
     method: "GET",
     headers: headersList
   });
  
   if(!res.ok){
    throw new Error(res.status)
   }
   let data = await res.json();
   return data
}

export const createOrders = async(body)=>{
  const endpoint = new URL(`${url}/order`)
  const token = await getToken()
  let headersList = {
    "token": token,
    'Content-type':'application/json'
   }
   
   let res = await fetch(endpoint, { 
     method: "POST",
     headers: headersList,
     body:JSON.stringify(body)
   });
  
   if(!res.ok){
    throw new Error(res.status)
   }
   let data = await res.json();
   return data?.status

}

export const handleFetchError = (errorCode) => {
  switch (Number.parseInt(errorCode)) {
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