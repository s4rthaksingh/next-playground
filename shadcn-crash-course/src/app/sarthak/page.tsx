import { Button } from '@/components/ui/button'
import React from 'react'

function MyPage() {
  return (
    <div className="h-full flex justify-center items-center flex-col">
        <div>MyPage :D</div>
        <button className='px-5 py-2 bg-white text-black rounded-md hover:bg-gray-300 m-5'>Click me!</button>
        <Button variant={'destructive'} size={'sm'}>Shadcn button</Button>
    </div>
  )
}

export default MyPage