// add, post, delete, update reqs
// cannot delete if has department

import {supabase} from "../Superbase"
import { type Location } from '../../util/types'

// get all
export async function getAllLocations() : Promise<Location[]> {
    const { data, error } = await supabase.from("location").select()

    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
    
    return (data ?? []) as Location[];
}

// get specific
export async function getLocation(name : string) : Promise<Location[]> {
    const { data, error } = await supabase.from("location").select().eq('name', name)

    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
    
    return (data ?? []) as Location[];
}

// add
export async function addLocation(location : Location) {
    const {data, error} = await supabase.from("location").insert(location)

    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }

}

// update

// delete
