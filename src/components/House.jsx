import "./../css/House.css";
import housePic from "../Images/big-house.jpg";

const House = () =>
{
    return(
        <section className="house">
            <h1>{props.name}</h1>
            <img src={housePic} alt="house"/>
        </section>
    )
}

export default House;