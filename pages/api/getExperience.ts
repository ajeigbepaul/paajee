import {groq} from "next-sanity"

import { client } from "@/sanity/lib/client";

const query = groq`
*[_type == "experience"]{
    ...,technology[]->
}`;
export async function getExperiences(){
    return client.fetch(query)
}
