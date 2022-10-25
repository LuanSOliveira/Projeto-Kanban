import { Provider } from "react-redux"
import Dashboard from "./components/Dashboard"
import Formulario from "./components/Formulario"
import store from "./store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Formulario/>
        <Dashboard/>
      </Provider>
    </div>
  )
}

export default App
