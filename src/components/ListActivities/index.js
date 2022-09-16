import { DataGrid } from "@mui/x-data-grid";
import { useActivitie } from "../../providers/activities";


const ListActivities = () => {

    const { activities } = useActivitie();

    console.log(activities);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Nome Atividade', width: 200 },
        { field: 'title', headerName: 'Titulo da Atividade', width: 300 },
        { field: 'deadline', headerName: 'Data de Entrega', width: 200 },
        { field: 'description', headerName: 'Descrição', width: 300 },
    ];
        

    return (
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={activities}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          button = {true}
        />
        </div>
    )

}



export default ListActivities;