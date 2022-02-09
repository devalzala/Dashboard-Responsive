import React, { useState } from "react";
import "./App.scss";
import { FaBars } from 'react-icons/fa';
// import Navbar from "./Navbar";

const App = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
  return(
    <React.Fragment>
      <div className="main_div">

        {/* Navigation side bar */}
        
        <div className="left_div" >
          <FaBars className="Bars" onClick={showSidebar} />

          <p><i class="fab fa-dyalog"></i> Site Name</p><br/><br/>

          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul onClick={showSidebar}>
              <li><i class="fas fa-chart-pie"></i>  DashBoard</li>
              <li><i class="far fa-building"></i>  Departments</li>
              <li><i class="far fa-lightbulb"></i>  Roles</li>
              <li><i class="fas fa-users"></i>  Leave Management</li>
              <li><i class="far fa-file-word"></i>  Reports</li>
              <li><i class="fas fa-id-card"></i> Contact Us</li>
            </ul>
            <br/><hr/><br/><br/>
            <ul>
              <li><i class="fas fa-cog"></i> Settings</li>
              <li><i class="fas fa-info-circle"></i> About Us</li>
            </ul>
          </nav>
        </div> 

        {/* ////////////////////////////////////////////////////////////////////////////////////// */}





        {/* DashBoard part */}
        <div className="right_div">
          <header>
            <button><i class="fas fa-plus-circle"></i> Add New</button>
          </header>
          <br/>

          <p>Employee Activity for this Week !</p>

          <br/>
          <div className="container">
            <div className="div_1">
              <div>
                <p>New Joinees</p>
                <h1>05</h1>
                <p>View Details</p>
              </div>
              <div className="icon">
                <p><i class="fas fa-user-plus"></i></p><br/><br/>
                <p><i class="fas fa-arrow-right"></i></p>
              </div>
              
            </div>
            <div className="div_2">
              <div>
                <p>Total Employees</p>
                <h1>70</h1>
                <p>View Details</p>
              </div>
              <div className="icon">
                <p><i class="fas fa-user-plus"></i></p><br/><br/>
                <p><i class="fas fa-arrow-right"></i></p>
              </div>
            </div>
            <div className="div_3">
            <div>
                <p>Employees on leave (in future)</p>
                <h1>12</h1>
                <p>View Details</p>
              </div>
              <div className="icon">
                <p><i class="fas fa-user-plus"></i></p><br/><br/>
                <p><i class="fas fa-arrow-right"></i></p>
              </div>
            </div>
            <div className="div_4">
            <div>
                <p>Employees on leave (today)</p>
                <h1>03</h1>
                <p>View Details</p>
              </div>
              <div className="icon">
                <p><i class="fas fa-user-plus"></i></p><br/><br/>
                <p><i class="fas fa-arrow-right"></i></p>
              </div>
            </div>
            
          </div>

          {/* Hero Section */}
          <div className="container_2">
            <div className="hero_left">
              <p>Leave Request for Employees</p>
              <div className="search">
                <div>
                  <p>Search</p>
                  <input type="type" placeholder="search for employees.. "></input><i class="fas fa-search"></i>
                </div>
                <div className="list">
                  <ul>
                    <li className="list-1">All</li>
                    <li className="list-2">Approved</li>
                    <li className="list-3">Rejected</li>
                    <li className="list-4">Pending</li>
                  </ul>
                </div>
              </div>

              <div>
                <table>
                  <tr>
                    <th>Emp ID</th>
                    <th>Emp Name</th>
                    <th>Leave Status</th>
                    <th>Approved by</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>S000083</td>
                    <td>Ernest Gaboyan</td>
                    <td>Approved</td>
                    <td>Admin</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>S000083</td>
                    <td>Ernest Gaboyan</td>
                    <td>Rejected</td>
                    <td>Admin</td>
                    <td><a href="#">View Reason</a></td>
                  </tr>
                  <tr>
                    <td>S000083</td>
                    <td>Ernest Gaboyan</td>
                    <td>Pending</td>
                    <td>---</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>S000083</td>
                    <td>Ernest Gaboyan</td>
                    <td>Rejected</td>
                    <td>You</td>
                    <td><a href="#">View Reason</a></td>
                  </tr>
                </table>
                <p id="number">1-8 of 1240 <i class="fas fa-chevron-left"></i>  <i class="fas fa-chevron-right"></i></p>
              </div>
            </div>

            <div className="hero_right">
              <div className="top">
                <div className="top-left">
                  <h2>Leave Balance (Quick Apply)</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nulla diam morbi id et morbi id non. Donec pellentesque pretium, commodo, ut ut nec, pellentesque adipiscing. Ornare in in sapien ut faucibus diam interdum.  </p> 
                </div>

                <div className="top-right"><h3><i class="fas fa-plus-circle"></i> Apply for Leave</h3></div>
              </div>
              <div className="bottom">
                <p>My Leave Balance</p>
                <div className="leave"> 
                  <div>Total Leaves Credited <br/> <h2>15</h2></div>
                  
                  <div>Applied Leaves <br/> <h2>04</h2></div>
                  <div>Available Leave Balance <br/> <h2>11</h2></div>
                  <div>Penalty Deduction <br/> <h2>0.00</h2></div>
                  <div>Carry Forward <br/> <h2>--</h2></div>
                </div>
              </div>
            </div>
          </div>

          <footer>© Site Name Organization Pvt. Ltd. 2020 </footer>
        </div>





        {/* ////////////////////////////////////////////////////////// */}
      </div>
    </React.Fragment>
  )
}

export default App;