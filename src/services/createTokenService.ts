import { createToken } from "../utils/createToken";
export async function createTokenService(event: FetchEvent) {
    try{
        const data = await event.request.json();
        console.log("Data: ", data);
        const token = await createToken(data);
        return {body: {token}, status: 200}
    }catch{
        return {body: "Expected payload", status: 404}
    }
}
