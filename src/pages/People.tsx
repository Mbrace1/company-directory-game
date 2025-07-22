import { useEffect, useState } from 'react'
import {getAllPeople} from "../components/people/peopleQuery"
import { type Person } from '../util/types'
import Button from '../components/generic/Button'
import Modal from '../components/generic/Modal'
import PeopleForm from '../components/people/peopleForm'

type Props = {}

export default function People({}: Props) {
  const [people, setPeople] = useState<Person[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    async function fetchPeople() {
      const data = await getAllPeople()
      console.log("data");
      
      setPeople(data)  
    }

    fetchPeople()
  }, [])

  function handleDelete(id : number) {
    console.log("delete" + id);
    
  }

  function handleAddPerson(data : Person) {
    console.log(data);
    
    // send to supabase
  }

  function handleShowModal() {
    setIsOpen(true)
  }

  
  return (
    <>
      <Modal title={"Add Person"} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PeopleForm type='add' onSubmit={handleAddPerson}/>
      </Modal>

      <div className='flex flex-row justify-between m-1 p-2 bg-gray-100 text-black'>
        <p>searchbar</p>
        <Button onClick={handleShowModal} variant={"flat"} className='bg-green-500'>add</Button>
      </div>

      <ul>
        {people &&
          people.map((p, key) => {
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