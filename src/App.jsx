import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from './components/ListadoPacientes';
import { useState, useEffect} from 'react';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
  const getLocalStorage = () => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPaciente={pacientesLS}
  }
  getLocalStorage();

  },[])

  useEffect(() => {
     localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes])
  
  const deletePatient = (id) => {
    const pacientesActualizados  = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }
  return (
    <div className="container mx-auto mt-10 ">
      <Header />
      <div className="mt-12 md:flex">
      <Formulario
         pacientes={pacientes}
         setPacientes={setPacientes}
         paciente={paciente}
         setPaciente={setPaciente}
      />
      <ListadoPacientes 
      pacientes={pacientes}
      setPaciente={setPaciente}
      deletePatient={deletePatient}
      />
      </div>
    </div>
  );
}

export default App;
