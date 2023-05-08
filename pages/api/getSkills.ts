import {groq} from "next-sanity"
import { client } from "@/sanity/lib/client";
const query = groq`
*[_type == "skills"]`;
export async function getSkills(){
    return client.fetch(query)
}
