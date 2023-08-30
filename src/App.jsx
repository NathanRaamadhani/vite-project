import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { PocketProvider } from './contexts/PocketContexts';
import RequireAuth from './components/RequireAuth';





function App() {

  return (
    <div>
      <PocketProvider>
        <RequireAuth  />
      </PocketProvider>
    </div>
  )
}

export default App
