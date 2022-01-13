import {createTokenService} from "../services/createTokenService";
import { jsonResponse } from "../utils";

export async function createTokenRoute(event: FetchEvent){
    if(event.request.method === "POST"){
        try{
            const response = await createTokenService(event);
            return jsonResponse({body: response.body, status: response.status})
        }catch(err){
            return jsonResponse({body: err, status: 404})
        }
    }else{
        return jsonResponse({body: "Expected Post!", status: 403})
    }
}