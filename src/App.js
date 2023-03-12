import NavBar from './Components/Navbar/Navbar';
import {QueryClientProvider, QueryClient} from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { View } from './Components/ViewAll/View';
import { AddRecord } from './Components/AddRecord/AddRecord';
import { UpdateRecord } from './Components/UpdateRecord/UpdateRecord';
import { DeleteRecord } from './Components/DeleteRecord/DeleteRecord';

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
      <NavBar />
      <Routes>
        <Route path='/viewAll' element={<View />}></Route>
        <Route path='/' element={<View />}></Route>
        <Route path='/add-record' element={<AddRecord />}></Route>
        <Route path='/update-record' element={<UpdateRecord />}></Route>
        <Route path='/delete-record' element={<DeleteRecord />}></Route>
      </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
