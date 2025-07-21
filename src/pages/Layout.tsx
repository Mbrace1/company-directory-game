import React from 'react'
import { Outlet } from 'react-router'
import Navigation from '../components/Navigation'

type Props = {}

export default function Layout({}: Props) {
  return (
    <>
        <Navigation/>
        <Outlet/>
    </>
  )
}