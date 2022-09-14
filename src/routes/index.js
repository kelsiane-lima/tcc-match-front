
import { Routes,   Route } from 'react-router-dom';
import TimelineCronograma from "../components/TimelineStudent";
import CreateActivity from '../pages/CreateActivity';


const RoutesArquivo = () => {
    return (
      <Routes>
        <Route exact path='/'  element={<TimelineCronograma/>} />
        <Route exact path='/actvity'  element={<CreateActivity/>} />
        </Routes>
    )};

    export default RoutesArquivo;