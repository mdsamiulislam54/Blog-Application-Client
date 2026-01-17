
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const LayoutP = ({ children, department, development, sales }: { children: React.ReactNode, department: React.ReactNode, development: React.ReactNode, sales: React.ReactNode }) => {
    return (
        <div>
            <nav className='flex gap-4 my-4'>
                <Button asChild>
                    <Link href="/development">Development</Link>
                </Button>
                <Button asChild>
                    <Link href="/department">DepartMent</Link>
                </Button>
                <Button asChild>
                    <Link href="/department/marketing">Department /// Marketing</Link>
                </Button>
             
                <Button asChild>
                    <Link href="/sales">Sales</Link>
                </Button>
                <Button asChild>
                    <Link href="/home-p">Home</Link>
                </Button>
                <Button asChild>
                    <Link href="/test">Test</Link>
                </Button>
                <Button asChild>
                    <Link href="/">Web Home</Link>
                </Button>
            </nav>
           <div className=' flex gap-4 mb-4'>
              <div className='w-100 h-100 border-amber-300 border-2'>
                {development}
              </div>
              <div className='w-100 h-100 border-amber-300 border-2'>
                {department}
              </div>
                <div className='w-100 h-100 border-amber-300 border-2'>
                    {sales}
                </div>
           </div>
           <div className='w-100 h-100 border-amber-300 border-2'>
            {children}
           </div>
        </div>
    )
}

export default LayoutP