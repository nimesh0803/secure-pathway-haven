import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/contexts/AuthContext'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Protected = () => {
  const { user } = useAuth()
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')

  const handleButtonClick = () => {
    alert(`Text Box 1: ${text1}\nText Box 2: ${text2}`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-3xl font-bold">Protected Page</h1>
        <p className="text-gray-600">Welcome, {user?.email}!</p>
        <p className="text-gray-600">This page is only visible to authenticated users.</p>
        
        <div className="space-y-4">
          <Input
            type="text"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Text Box 1"
          />
          <Input
            type="text"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="Text Box 2"
          />
          <Button onClick={handleButtonClick}>
            Show Alert
          </Button>
        </div>

        <Button asChild>
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}

export default Protected