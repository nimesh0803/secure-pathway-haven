import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthContext'
import { Link } from 'react-router-dom'

const Index = () => {
  const { user, signOut } = useAuth()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our App</h1>
        <div className="space-y-4">
          {!user ? (
            <>
              <Button asChild className="w-full">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild className="w-full">
                <Link to="/protected">Protected Page</Link>
              </Button>
              <Button
                variant="destructive"
                onClick={signOut}
                className="w-full"
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Index