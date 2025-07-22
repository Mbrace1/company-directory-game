import { Outlet } from 'react-router'
import Navigation from '../components/Navigation'

type Props = {}

export default function Layout({}: Props) {
  return (
    <>
        <Navigation/>
        <div className='mt-20'>
          <Outlet/>
        </div>
    </>
  )
}