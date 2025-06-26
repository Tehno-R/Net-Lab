import buildings from "../table"; 
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import { DataGrid, GridRowsProp, GridColDef  } from "@mui/x-data-grid"; 
 
function BuildingsGrid() { 
 
    const rows: GridRowsProp = buildings; 
 
    const columns: GridColDef[] = [ 
        { field: 'Название', flex: 1},
        { field: 'G3Dmark', flex: 0.5},
        { field: 'Цена', flex: 0.5},
        { field: 'Эффективность', flex: 0.5},
        { field: 'Год'},
        { field: 'Категория'},
        { field: 'Саб Категория'},
    ];
       
    return ( 
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
          <DataGrid 
            localeText={ruRU.components.MuiDataGrid.defaultProps.localeText} 
            showToolbar={true}
            rows={rows}  
            columns={columns}  
          /> 
        </Container>
  ); 
} 
 
 export default BuildingsGrid;