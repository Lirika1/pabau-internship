'use client'

import { useRouter } from 'next/navigation'

export default function Button({ path, text }: { path: string, text: string }) {
  const router = useRouter()

return (
    <button 
      type="button" 
      onClick={() => router.push(path)}
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
    >
      {text}
    </button>
  )
}