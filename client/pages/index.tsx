import React, { ReactElement } from 'react'
import dynamic from 'next/dynamic'
import Preloader from '../components/Preloader/Preloader'
const Navbar = dynamic(() => import('../components/Navbar/Navbar'), {
  loading: () => <Preloader></Preloader>,
  ssr: true,
})
const Index: React.FC<{}> = ({}): ReactElement | null => {
  return (
    <>
      <Navbar></Navbar>
    </>
  )
}
export default Index
