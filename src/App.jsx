import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import file "gaib" yang nanti muncul otomatis setelah dijalankan
import { routeTree } from './routeTree.gen'

// Buat router menggunakan tree otomatis tadi
const router = createRouter({ routeTree })

function App() {
  return <RouterProvider router={router} />
}

export default App