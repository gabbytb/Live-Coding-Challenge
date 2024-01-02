// import React from "react";
// import { Link } from "react-router-dom";
// import ToggleNotification from "../img/Toggle.svg"
// import DashboardImg from "../img/Ellipse 2824.svg";
// import Message from "../img/alarm.svg";
// import SearchIcon from "../img/search-2.svg";


// export default function RightNav() {

//     const loggedInUser = JSON.parse(localStorage.getItem("user"));
//     const userName = loggedInUser ? loggedInUser.userName : handleLogout();
    


//     function handleLogout() {
//         localStorage.clear();
//         window.location.replace("http://127.0.0.1:3000/user/login");
//     }
    

//     return (
//         <>
//             <section className="section-container p-0 m-0 mw-100 position-sticky top-0 pb-5" id="dashboard">
    
//                 {/* Section Nav */}
//                 <div className="row p-0 m-0 justify-content-between position-sticky top-0 bg-white">
    
//                     {/* L:  Search/Notifications */}
//                     <div className="col-xl-9 col-lg-9 col-md-8 p-0">
//                         <div className="container border-bottom border-1 p-0 row justify-content-between align-items-center m-0 ps-4 pe-2 pt-4 pb-4 pe-lg-0">
//                             <div className="row justify-content-between m-0 w-100 p-0">
//                                 <div className="col-xl-3 col-lg-4 col-md-7 px-0 d-flex">
//                                     <div className="row border-0 m-0 justify-content-between">
//                                         <div className="col-2 d-flex p-0">
//                                             <img className="text-secondary w-50 w-75" src={SearchIcon}  alt="search-icon" /> 
//                                         </div>
//                                         <div className="col-10 d-flex p-0">
//                                             <input className="text-secondary border-start border-top border-end border-light w-100" type="search" placeholder="Type to search..." />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-3 col-lg-3 d-flex px-xl-3 px-lg-0 d-block d-xl-block d-lg-block d-md-none">
//                                     <div className="row justify-content-between w-100 m-0 h-100" id="toggleNotify">
//                                         <div className="col-xl-5 col-lg-5 col-md-5 px-0 d-flex">
//                                             <img className="mw-75 w-75" src={ToggleNotification} alt="toggle-notification" />
//                                         </div>
//                                         <div className="col-xl-7 col-lg-7 col-md-7 px-0 d-flex">
//                                             <img className="w-50 mw-50 px-2" src={Message} alt="notification-message" />        
//                                             <img className="w-50 mw-50 px-2" src={Notification} alt="chat-message" />        
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div> 
//                     {/* END:  Search/Notifications */}
    
//                 {/* ***************************************************************** */}  
    
//                     {/* R:  User Info */}
//                     <div className="col-xl-3 col-lg-3 col-md-4 p-0">
//                         <div className="container border-sm border-md border-lg border-bottom border-1 p-0 d-flex align-items-center h-100">
//                             <div className="row w-100 p-0 m-0 justify-content-end align-items-center">
//                                 <div className="col-xl-8 col-lg-8 col-md-8 p-0 w-100">
                                
//                                     <button className="dropdown-toggle btn align-items-center w-100 m-0 border-0 ps-xl-0 pe-xl-3 ps-lg-0 pe-lg-3 d-flex" data-bs-toggle="collapse" data-bs-target="#userInfo" aria-expanded="false" aria-controls="dashboardDropdown">
//                                         <div className="row m-0 w-100 md-flex-column align-items-center justify-content-xl-between justify-content-lg-between justify-content-md-end ps-xl-0 pe-xl-0 px-lg-0 pe-md-3">
//                                             <div className="col-xl-8 col-lg-11 col-md-0 p-0 pe-lg-1">
//                                                 <Link className="profile text-dark w-100 d-flex flex-column p-0 justify-content-end align-items-end fw-medium text-lowercase" to={"/admin/dashboard"} alt="profile">
//                                                     {userName}
//                                                 </Link>
//                                                 <small className="text-secondary fw-md d-flex justify-content-end text-capitalize">Ux Designer</small>
//                                             </div>
//                                             <div className="col-xl-4 col-lg-0 col-md-9 p-0 profile-icon d-md-none d-lg-none d-xl-block">
//                                                 <img className="w-xl-50" src={DashboardImg} alt="profile-icon" />                                        
//                                             </div>
//                                         </div>
//                                     </button>
    
//                                 </div>
//                             </div>
//                         </div>
//                         {/* END:  User Info */}
    
    
//                         {/* User Info (Toggle/Options) */}
//                         <div className="row position-fixed shadow-lg bg-white">
//                             <div className="collapse px-4 py-2 g-2" id="userInfo" aria-labelledby="dashboardDropdown">
//                                 <div className="dropdown-item pb-2">
//                                     <Link className="text-dark" to="#" alt="reset password">
//                                         CRM Dashboard
//                                     </Link>
//                                 </div>
//                                 <div className="dropdown-item pb-2">
//                                     <Link className="text-dark" onClick={handleLogout} to={"/admin/dashboard?logout"} alt="log out">
//                                         Logout
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* END:  User Info (Toggle/Options) */}
    
//                     </div>
//                     {/* User Info:  End */}
    
//                 </div>
//                 {/* END:  Section Nav */}

//             </section>
//         </>
//     );

// }