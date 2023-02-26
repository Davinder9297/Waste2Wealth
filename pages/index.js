import Carousal from "../components/carousal"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Director2 from "../components/director2"
import Events from "../components/events"
import Collab from "../components/collab"
import Footer from "../components/footer"
export default function Index() {
    return(<>
      <div className="flex-col">

<div className="h-[450px] mt-[2px] "><Carousal/></div>
<Director2/>
<Events/>
<Collab/>
<Footer/>
      </div>
    </>)
}
