import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Logos */}
      <div className="flex gap-10 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="h-20 w-20 hover:scale-110 transition-transform duration-300"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="h-20 w-20 hover:rotate-180 transition-transform duration-500"
            alt="React logo"
          />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
        Vite + React + Tailwind
      </h1>

      {/* Card */}
      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 transition-transform duration-200"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-300">
          Edit <code className="bg-gray-700 px-1 py-0.5 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-400 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
