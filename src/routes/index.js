
import { Routes,   Route } from 'react-router-dom';
import Table from '../components/Table';
import TimelineCronograma from "../components/TimelineStudent";
import CreateActivity from '../pages/CreateActivity';


const RoutesArquivo = () => {
    return (
      <Routes>
        <Route exact path='/'  element={<TimelineCronograma/>} />
        <Route exact path='/actvity'  element={<CreateActivity/>} />
        <Route exact path='/table'  element={<Table/>} />
        </Routes>
    )};

    export default RoutesArquivo;