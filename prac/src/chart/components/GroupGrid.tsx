// src/chart/components/GroupGrid.tsx
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tGroup } from "../groupdata"; 
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';

type GroupProps = {
    data: tGroup;
};

function GroupGrid({ data }: GroupProps) {
    const columns: GridColDef[] = [
        { field: 'Группа', headerName: 'Группа', flex: 1 },
        { field: 'Минимальная цена', headerName: 'Минимальная цена', flex: 0.5 },
        { field: 'Максимальная цена', headerName: 'Максимальная цена', flex: 0.5 },
        { field: 'Средняя цена', headerName: 'Средняя цена', flex: 0.5 },
    ];

    return (
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText} 
                rows={data}
                columns={columns}
                getRowId={(row) => row.id}
                showToolbar={true}
            />
        </Container>
    );
}

export default GroupGrid;