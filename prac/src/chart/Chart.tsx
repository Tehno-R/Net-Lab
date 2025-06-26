import Navbar from "../components/Navbar";
import GroupGrid from "./components/GroupGrid";
import { countries, years, types } from "./groupdata";
import Container from '@mui/material/Container';
import Select, { SelectChangeEvent } from '@mui/material/Select'; 
import Box from '@mui/material/Box'; 
import InputLabel from '@mui/material/InputLabel'; 
import MenuItem from '@mui/material/MenuItem'; 
import FormControl from '@mui/material/FormControl';
import Footer from "../components/Footer";
import GroupChart from "./components/GroupChart";

import * as React from 'react'; 
type tSelect = "Год" | "Категория" | "СабКатегория";

function Chart() { 

    const [group, setGroup] = React.useState<tSelect>("Год");

    const [groupData, setGroupData] = React.useState(countries);

    const handleChange = (event: SelectChangeEvent) => { 
        const selectedGroup = event.target.value as tSelect;
        setGroup(selectedGroup); 

        /* самостоятельно включить изменение состояния groupData */
        switch(selectedGroup) {
            case "Год":
                setGroupData(countries);
                break;
            case "Категория":
                setGroupData(years);
                break;
            case "СабКатегория":
                setGroupData(types);
                break;
            default:
                setGroupData(countries);
        }
      } 

    return ( 
        <div> 
            <Navbar active="3"/> 
            <Box sx={{ width:"200px", m:"auto" }}> 
            <FormControl fullWidth> 
                <InputLabel> Группировать по </InputLabel> 
                    <Select 
                        id="select-group" 
                        value={group} 
                        label="Группировать по" 
                        onChange={ handleChange }
                    > 
                        <MenuItem value="Год"> Год </MenuItem>
                        <MenuItem value="Категория"> Категория </MenuItem>
                        <MenuItem value="СабКатегория"> СабКатегория </MenuItem>
                    </Select> 
                </FormControl> 
            </Box>

            <Container maxWidth="lg" sx={{ mt: '20px' }}>
                <GroupChart data={groupData} />
            </Container>

            <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
                <GroupGrid  data={groupData} />
            </Container>
            <Footer/>
        </div> 
    ); 
} 

export default Chart;