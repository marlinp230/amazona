

import  { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Pages/Home';
import Product from './Componets/Product';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Link href="/">amazona</Link>
      </header>
      <main>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:slug' element={<Product/>}/>
      </Routes>

      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
