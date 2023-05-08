import {groq} from "next-sanity"
import { client } from "@/sanity/lib/client";
import { Social } from "@/typings";

const query = groq`
*[_type == "social"]`

type Data = {
    socials:Social[]
}
export async function getSocials(){
    return client.fetch(query)
}
