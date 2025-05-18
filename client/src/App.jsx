import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateNote from './components/CreateNote'
import EditNote from './components/EditNote'
import NoteList from './components/NoteList'
import "./Style.css"
const App = () => {
  return (
    <>
      <BrowserRouter>
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/edit/:id" element={<EditNote />} />
        </Routes>
      </div>
      </BrowserRouter>  
    </>
  )
}

export default App