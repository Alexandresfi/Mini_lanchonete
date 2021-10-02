import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Rotas from './Rotas';

export default function Burgues() {
  return (
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
  );
}
