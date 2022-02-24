import './App.css'
import Main from './components/main/Main'
import AppState from './context/App/State'

function App() {
  return (
    <div className='App'>
      <AppState>
        <Main />
      </AppState>
    </div>
  )
}

export default App
