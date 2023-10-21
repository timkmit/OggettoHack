import AppRouter from "./components/AppRouter"
import './App.css'

function App() {
  //TODO: роутинги неправильно работают если зайти за модера - на кнопке регистрация переходит в модерацию, надо проработать отрисовку этой кнопки елси зпреган пользователь - не показывать кнопку

  return (
    <>
    <AppRouter/>
    </>
  )
}

export default App
