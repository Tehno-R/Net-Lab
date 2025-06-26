import { BarChart} from '@mui/x-charts/BarChart'; 
import Container from '@mui/material/Container'; 
import React from 'react';
import SettingChart from './SettingChart';
import { LineChart} from '@mui/x-charts/LineChart';

import { tGroup } from '../groupdata'; 

interface GroupChartProps {
    data: tGroup;
}

function GroupChart({ data }: GroupChartProps) { 

    const [series, setSeries] = React.useState({ 
        'Максимальная цена': true, 
        'Средняя цена': false, 
        'Минимальная цена': false, 
    });
    //цвета для столбцов
    //функция чтобы typescript знал что всегда вернется строка 
    const getColor = (key: string): string => {
        switch(key) {
          case 'Максимальная цена': return '#2ecc71';
          case 'Средняя цена': return '#3498db';
          case 'Минимальная цена': return '#9b59b6';
          default: return '';
        }
    };

    let seriesY = Object.entries(series) 
      .filter(item => item[1] == true) 
      .map(item => { 
          return {"dataKey": item[0], "label": item[0] , color: getColor(item[0])} 
    }); 
     
    const chartSetting = { 
      yAxis: [{ label: 'цена (м)' }], 
      height: 400, 
    }; 

    const [isBar, setIsBar] = React.useState(true);
    
      return( 
          <Container maxWidth="lg"> 
          {isBar ? (  
            <BarChart 
                dataset={ data } 
                xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]} 
                series={ seriesY }
                {...(Object.values(series).filter(Boolean).length === 1 && { barLabel: "value" })}

                slotProps={{ 
                    legend: { 
                    position: { vertical: 'bottom', horizontal: 'center' }, 
                    }, 
                }} 
                {...chartSetting} 
              />   
          ) : (
            <LineChart 
                dataset={ data } 
                xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]} 
                series={ seriesY} 
                slotProps={{ 
                legend: { 
                    position: { vertical: 'bottom', horizontal: 'center' }, 
                }, 
                }} 
                {...chartSetting} 
            />
            )}
            <SettingChart series={ series } setSeries={ setSeries } isBar={isBar} setIsBar={setIsBar}/>
          </Container> 
      ) 
  }; 
   
  export default GroupChart; 