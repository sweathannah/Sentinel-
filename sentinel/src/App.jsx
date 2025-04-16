import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This will render the child route (like Home, About, etc) */}
      </main>
    </div>
  );
}

export default App;
