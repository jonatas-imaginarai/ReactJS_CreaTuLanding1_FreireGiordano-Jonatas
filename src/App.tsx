import { NavBar } from './components/NavBar/NavBar.tsx'
import { ItemsListContainer } from './components/ItemsListContainer/ItemsListContainer.tsx'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <ItemsListContainer
        label='En breve E-Commerce de Productos Agroecologicos'
        className='font-bold mt-8 p-4 text-2xl font-[jost]'>
      </ItemsListContainer>
    </>
  )
}

export default App
