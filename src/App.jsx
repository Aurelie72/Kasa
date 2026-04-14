import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './AppRouter';

import '../src/app.scss'


function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  )
}
export default App