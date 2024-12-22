import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import './Infonbox.css';

export default function InfoBox({ Info }) {

    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2FybXRofGVufDB8fDB8fHww";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyfGVufDB8fDB8fHww";
    const RAINY_URL = "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjBkYXl8ZW58MHx8MHx8fDA%3D";


    return (
        <div className='Infobox'>
            <div className='cardcontainer'>
                <Card sx={{ maxWidth: 345 }} style={{ boxShadow: "8px 8px 15px black" }} >
                    <CardMedia
                        sx={{ height: 200 }}
                        image={(Info.humidity > 80) ? RAINY_URL : ((Info.temp > 20) ? HOT_URL : COLD_URL)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                            <b>{Info.city} {(Info.humidity > 80) ? <ThunderstormSharpIcon /> : ((Info.temp > 20) ? <WbSunnySharpIcon /> : <AcUnitIcon />)}</b>
                        </Typography>
                        <hr />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p><b>Temperature :</b>  {Info.temp}&deg;C</p>
                            <p><b>Min_Temperatute :</b>  {Info.tempMin}&deg;C </p>
                            <p><b>Max_Temperatute :</b>  {Info.tempMax}&deg;C </p>
                            <p><b>Humidity :</b>  {Info.humidity} </p>
                            <p> <b>The Weather can be described as <i>{Info.description}</i>  and Feels_Like : {Info.feels_like} </b></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}