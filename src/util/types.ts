
export type Person = {
    id : number
    name : string
    job : string
    salary : number
    email : string
    department_id : number
    manager_id : number
}

export type Location = {
    id : number
    name : string
}

export type Department = {
    id : number
    name : string
    location_id : number
}