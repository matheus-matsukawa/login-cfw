import {sign} from "jsonwebtoken";
export async function createToken(payload: object) { 
    return sign(payload, "secret", {algorithm: "HS256"});  
}