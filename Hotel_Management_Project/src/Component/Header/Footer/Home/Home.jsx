import { Link } from "react-router-dom";
import Slider from "../../Welcomeslider/Welcomeslider";
import Booking from "../../Booking/Booking";
import Room from "../../Room/Room";
import Facilities from "../../Facilities/Facilities";
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <Slider />
           
            <Booking/>
            <Room/>
            <Facilities/>
        </div>
    );
}