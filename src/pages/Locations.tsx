import Modal from "../components/generic/Modal"
import Button from "../components/generic/Button"
import LocationForm from "../components/location/Form"
import { type Location } from "../util/types"
import { useState, useEffect } from "react"
import { getAllLocations } from "../components/location/locationQuery"

type Props = {}

export default function Locations({}: Props) {
    const [locations, setLocations] = useState<Location[]>([])
    const [isOpen, setIsOpen] = useState(false)
  
    useEffect(() => {
      async function fetchLocations() {
        const data = await getAllLocations()
        console.log("data");
        
        setLocations(data)  
      }
  
      fetchLocations()
    }, [])
  
    function handleDelete(id : number) {
      console.log("delete" + id);
      
    }
  
    function handleAddLocation() {
      // send to supabase
    }
  
    function handleShowModal() {
      setIsOpen(true)
    }

  return (
    <>
      <Modal title={"Add Person"} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <LocationForm/>
        <Button onClick={handleAddLocation} variant={"flat"} className='bg-green-500'>add</Button>
      </Modal>

      <div className='flex flex-row justify-between m-1 p-2 bg-gray-100 text-black'>
        <p>searchbar</p>
        <Button onClick={handleShowModal} variant={"flat"} className='bg-green-500'>add</Button>
      </div>

      <ul>
        {locations &&
          locations.map((p, key) => {
            return (
              <li key={key}>
                <div className='flex flex-row justify-between m-1 p-2 bg-gray-100 text-black'>
                  <p>{p.name}</p>
                  <Button onClick={() => handleDelete(p.id)}>delete</Button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}