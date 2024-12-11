import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthContext'
import { Link } from 'react-router-dom'

const Protected = () => {
  const { user } = useAuth()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-3xl font-bold">Protected Page</h1>
        <p className="text-gray-600">Welcome, {user?.email}!</p>
        <p className="text-gray-600">This page is only visible to authenticated users.</p>
        <Button asChild>
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}

export default Protected