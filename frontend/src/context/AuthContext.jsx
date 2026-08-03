import {createContext,useEffect,useState} from "react";
import api from "../services/api";
import {
saveToken,
getToken,
removeToken
} from "../services/token";

export const AuthContext=createContext();

export function AuthProvider({children}){

const [user,setUser]=useState(null);

const [loading,setLoading]=useState(true);

useEffect(()=>{

const token=getToken();

if(token){

api.defaults.headers.common.Authorization=`Bearer ${token}`;

try{

const payload=JSON.parse(atob(token.split(".")[1]));

setUser({

id:payload.id,

username:payload.username

});

}catch{

removeToken();

}

}

setLoading(false);

},[]);

function login(data){

saveToken(data.token);

api.defaults.headers.common.Authorization=`Bearer ${data.token}`;

const payload=JSON.parse(atob(data.token.split(".")[1]));

setUser({

id:payload.id,

username:payload.username

});

}

function logout(){

removeToken();

delete api.defaults.headers.common.Authorization;

setUser(null);

}

return(

<AuthContext.Provider
value={{
user,
loading,
login,
logout
}}
>

{children}

</AuthContext.Provider>

);

}
