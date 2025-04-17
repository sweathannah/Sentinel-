import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Important CSS

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
