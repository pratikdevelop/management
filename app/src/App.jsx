import './App.css'
import Header from './components/Header'
import DataTable from './components/Table'

function App() {
  return (<div className='flex flex-col overflow-hidden space-y-4 max-h-full h-[100vh] w-full' >
  <Header/>
  <DataTable/>
  </div>
  )
}

export default App
