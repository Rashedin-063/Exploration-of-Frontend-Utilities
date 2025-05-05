import { ReactNode } from 'react'

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen bg-slate-800">
      <Nav />
      <main>{ children }</main>
      <Footer />
    </div>
  )
}

export default Layout;