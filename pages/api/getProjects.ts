import {groq} from "next-sanity"
import { client } from "@/sanity/lib/client";
const query = groq`
*[_type == "project"]{
    ...,technologies[]->
}`;
export async function getProjects(){
    return client.fetch(query)
} 
