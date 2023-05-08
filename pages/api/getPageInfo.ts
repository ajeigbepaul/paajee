import {groq} from "next-sanity"
import { client } from "@/sanity/lib/client";
const query = groq`
*[_type == "pageInfo"][0]`;
export async function getPageInfo(){
    return client.fetch(query)
}
