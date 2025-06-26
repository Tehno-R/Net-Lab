import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import structures from "../../data";
import BuildCard from "./BuildCard";

const cardData =
    [structures[0], structures[6],
        structures[9], structures[7],
        structures[10], structures[11]]

function Content() {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={{xs: 3, md: 6}}>
                {cardData.map((item, index) => (
                    <Grid key={index} size={{xs: 12, md: index % 2 === 0 ? 7 : 5}}>
                        <BuildCard building={item} cardIndex={index}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Content;