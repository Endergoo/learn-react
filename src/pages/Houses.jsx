import "./../css/Houses.css";
import House from "../components/House"

const Houses = () => 
{
    return (
        <main id="contact" className="main-content">
            <h2>Houses</h2>
            <div className="columns">
                <House name="Bum House"/>
                <House name="Big House"/>
                <House name="Smaller House"/>
            </div>
        </main>
    )
};

export default Houses;