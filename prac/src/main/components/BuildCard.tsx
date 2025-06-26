import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';

// StyledTypography для описания здания
const StyledTypography = styled(Typography)(({theme}) => ({
    color: theme.palette.text.secondary,
    textAlign: 'justify',
    marginBottom: theme.spacing(1.5),
    '&:last-child': {
        marginBottom: 0,
    },
}));

interface ComponentProps {
    building: {
        img: string,
        title: string,
        description: string,
    };
    cardIndex: number;
}

function BuildCard({building, cardIndex}: ComponentProps) {
    // четные - картинка слева, нечетные - справа
    const isEven = cardIndex % 2 === 0;
    if (isEven) {
        return (
            <Card sx={{display: 'flex', flexDirection: 'column'}}>
                <CardMedia
                    component="img"
                    alt={building.title}
                    image={building.img}
                    sx={{height: 300, objectFit: 'cover'}}
                />
                <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            {building.title}
                        </Typography>
                        <StyledTypography variant="body2">
                            {building.description}
                        </StyledTypography>
                    </CardContent>
                    <CardActions sx={{justifyContent: 'end'}}>
                        <Button size="small">Подробнее</Button>
                    </CardActions>
                </Box>
            </Card>
        )
    } else {
        return (
            <Card sx={{display: 'flex', flexDirection: 'column'}}>
                {/* Верхняя половина*/}
                <Box sx={{display: 'flex', height: '50%'}}>
                    <Box sx={{
                        width: '30%',
                        p: 2,
                        overflow: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <Typography gutterBottom variant="h5">
                            {building.title}
                        </Typography>
                    </Box>
                    <CardMedia
                        component="img"
                        alt={building.title}
                        image={building.img}
                        sx={{width: '70%', height: '100%', objectFit: 'cover'}}
                    />
                </Box>

                {/* Нижняя половина*/}
                <Box sx={{
                    height: '50%',
                    p: 2,
                    overflow: 'auto'
                }}>
                    <StyledTypography variant="body2">
                        {building.description}
                    </StyledTypography>
                    <CardActions sx={{justifyContent: 'flex-end', mt: 1}}>
                        <Button size="small">Подробнее</Button>
                    </CardActions>
                </Box>
            </Card>
        );
    }
}

export default BuildCard;