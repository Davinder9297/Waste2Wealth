export default function Header(){
    return(<>
    <div className="flex  justify-around pt-2 h-11 font-serif text-md font-semibold bg-purple-300 ">
<div >Home</div>
<div>About us</div>

<div className="dropdown show">
  <a className=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Admission
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" href="#">Programs offered</a>
    <a className="dropdown-item" href="#">Admission 2023</a>
    <a className="dropdown-item" href="#">Fee Structure</a>
    <a className="dropdown-item" href="#">Scholarships</a>
  </div>
</div>

<div>Faculty & Other Staff</div>

<div className="dropdown show">
  <a className=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Student Facilities   
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" href="#">Events And Activites</a>
    <a className="dropdown-item" href="#">SC-ST Grievance</a>
    <a className="dropdown-item" href="#">Campus Library</a>
    <a className="dropdown-item" href="#">Two Computer LabS</a>
    <a className="dropdown-item" href="#">Digital Electronics Lab</a>
    <a className="dropdown-item" href="#">Seminar Hall</a>
    <a className="dropdown-item" href="#">Sports Activities</a>
    <a className="dropdown-item" href="#">Hostel</a>
    <a className="dropdown-item" href="#">ICT Enabled Classes</a>
    <a className="dropdown-item" href="#">Cafetria</a>
  </div>
</div>

<div><a href="">Placements</a></div>

<div><button>Login</button></div>
</div>
    </>)
}