
import { Routes,   Route } from 'react-router-dom';
import ListActivities from '../components/ListActivities';
import TimelineCronograma from "../components/TimelineStudent";
import CreateActivity from '../pages/CreateActivity';


const RoutesArquivo = () => {
    return (
      <Routes>
        <Route exact path='/'  element={<TimelineCronograma/>} />
        <Route exact path='/actvity'  element={<CreateActivity/>} />
        <Route exact path='/actvities'  element={<ListActivities/>} />
        
        </Routes>
    )};

    export default RoutesArquivo;