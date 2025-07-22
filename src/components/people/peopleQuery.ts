import {supabase} from "../Superbase"
import { type Person } from '../../util/types'

// get all
export async function getAllPeople() : Promise<Person[]> {
    const { data, error } = await supabase.from("people").select("*")

    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
    
    return (data ?? []) as Person[];
}

// get specific
export async function getPerson(name : string) : Promise<Person[]> {
    const { data, error } = await supabase.from("people").select().eq('name', name)

    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
    
    return (data ?? []) as Person[];
}

// add
export async function addPerson(person : Person) {
    const {data, error} = await supabase.from("people").insert(person)

    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }

}

// update

// delete
