import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashboardIcon from "../assets/img/Dashboard.svg";
import CalendarIcon from "../assets/img/calendar-vector.svg";
import ProfileIcon from "../assets/img/profile.svg";
import TaskIcon from "../assets/img/Taskicon.svg";
import Pro from "../assets/img/GoPro.svg";
import LogoIcon from "../assets/img/Logo.svg";
import FormsIcon from "../assets/img/Forms.svg";
import TableIcon from "../assets/img/Tables.svg";
import PagesIcon from "../assets/img/Pages.svg";
import MessagesIcon from "../assets/img/Messages.svg";
import InboxIcon from "../assets/img/Inbox.svg";
import InvoiceIcon from "../assets/img/Invoice.svg"
import ChartIcon from "../assets/img/Chart.svg";
import UiElements from "../assets/img/ui-elements.svg";
import AuthIcon from "../assets/img/Authentication.svg";

import DashboardImg from "../assets/img/Ellipse 2824.svg";
import Message from "../assets/img/alarm.svg";
import Notification from "../assets/img/chat-alt-8.svg"
import SearchIcon from "../assets/img/search-2.svg";
import moreIcon from "../assets/img/more-alt.svg";

import USAFlag from "../assets/img/countries/country-usa.svg";
import CanadaFlag from "../assets/img/countries/country-canada.svg";
import FranceFlag from "../assets/img/countries/country-france.svg";
import ItalyFlag from "../assets/img/countries/country-italy.svg";
import AustraliaFlag from "../assets/img/countries/country-australia.svg";
import IndiaFlag from "../assets/img/countries/country-india.svg";

import AppleWatch from "../assets/img/products/apple-watch-series-7.svg";
import MacbookPro from "../assets/img/products/macbook-pro-M1.svg";
import DellInspiron from "../assets/img/products/dell-inspiron-15.svg";
import HpProbook from "../assets/img/products/hp-probook-450.svg";

import BarChartComponent from "../assets/dashboard/charts/BarChartComponent";
import PieChartComponent from "../assets/dashboard/charts/PieChartComponent";
import MapComponent from "../assets/dashboard/charts/MapComponent";

import MyCalendar from "../assets/dashboard/calendarPg/MyCalendar";
import ProfilePage from "../assets/dashboard/profilePg/ProfilePage";
// import TaskPage from "../assets/dashboard/taskPg/TaskPage";
import FormsPage from "../assets/dashboard/formsPg/FormsPage";







const Dashboard = () => {    

    console.clear();
               
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const userName = loggedInUser ? loggedInUser.userName : handleLogout();
    const userFirstName = loggedInUser ? loggedInUser.firstName : handleLogout();
    const userLastName = loggedInUser ? loggedInUser.lastName : handleLogout();
    const userProfile = userFirstName + " " + userLastName;
    const userRole = loggedInUser ? loggedInUser.roles : handleLogout();
    console.log("LOGGED-IN USER ROLES: ", JSON.stringify(userRole));

    let n, usersRole;
    for (n = 0; n < userRole.length; n++) {
        if (userRole[n].role === "ROLE_ADMIN") {
            let result = userRole[n].role;
            console.log("SELECT ADMIN USER ROLE: " + result + "\nWith Role beginning @ 0, This Role is @ No.: " + n);

            if (result) {
                usersRole = "Admin";
                console.log("LOGGED-IN USER: " + userProfile + ",\nSelected User Role: " + userRole[n].role + ",\nParsed Role: " + usersRole);
            } else {
                handleLogout();
            }
            
        }
    }

    function handleLogout() {
        localStorage.clear();
        const redirToLogin = "/user/login";
        window.location.replace(redirToLogin);
    }

    



    useEffect(() => {
        document.title = "Admin Dashboard | Oyebanji Gabriel";        
    }, []);
    




    // KEEP TRACK: Of Active section
    const [activeSection, setActiveSection] = useState("home");





    return (
        <>
        <div className="container-fluid p-0">
            <div className="row m-0">


                {/* ***************************************************************** */}  
                {/* NAVIGATION */}
                {/* ***************************************************************** */}  
                <div className="col-sm-4 col-md-3 col-lg-3 p-0">
                    <aside className="aside-container row w-100 m-0 bg-dark">
                        <div className="col px-0">
                            <div className="pt-0 pb-5 px-0 d-flex flex-column">
                            
                                {/* ***************************************************************** */}  
                                {/* ASIDE NAV */}
                                {/* ***************************************************************** */}  
                                {/* Aside Logo */}
                                <div className="logo py-4 px-5 d-flex justify-content-center w-100 position-sticky top-0 bg-dark">
                                    <Link to={"/admin/dashboard"} alt="logo">
                                        <img className="w-25 w-50 w-75" src={LogoIcon} alt="logo"/>
                                    </Link>
                                </div>                  
                                {/* END:  Aside Logo */}
                                {/* ***************************************************************** */}  
                                {/* ***************************************************************** */}  



                                {/* ***************************************************************** */}  
                                {/* ASIDE CONTENTS */}
                                {/* ***************************************************************** */}  
                                {/* Aside MENU */}
                                <div className="row w-100 mt-4 mx-auto mb-0">

                                    {/* MENU TITLE */}
                                    <div className="d-flex p-0 mb-3 px-3">
                                        <p className="w-100 header-style m-0 px-3">MENU</p>
                                    </div>
                                    {/* END:  MENU TITLE */}


                                    {/* MENU LINKS */}
                                    <nav className="row w-100 m-0 px-3">
                                        <ul className="p-0 m-0 row g-1" id="accordion">


                                            {/* START:  Menu 1 */}
                                            <li className="card p-0 border-0">
                                                <div className="card-header p-0 border-0" id="headingOne">
                                                    <div className="d-flex border-0 w-100 dropdown align-items-center justify-content-between p-0">
                                                        <h4 className="mb-0 w-100">             
                                                            <button onClick={() => setActiveSection('home')} className="d-flex btn btn-dark border-0 rounded rounded-0 w-100 dropdown-toggle align-items-center justify-content-between px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#dashboard" aria-expanded="false" aria-pressed="true" aria-controls="headingOne">
                                                                <Link className="text-light" alt="dashboard">
                                                                    <img className="pe-3" src={DashboardIcon} alt="icon" />
                                                                    Dashboard                                                        
                                                                </Link>
                                                            </button>
                                                        </h4>
                                                    </div>
                                                    <div className="collapse bg-dark" id="dashboard" aria-labelledby="dashboard">
                                                        <div className="card-body d-flex flex-column row-gap-3">
                                                            <div className="d-flex justify-content-between">
                                                                <Link className="text-light" to="#" alt="eCommerce">
                                                                    eCommerce
                                                                </Link>
                                                                <img className="btn btn-primary" src={Pro} alt="premium" />
                                                            </div>
                                                            <Link className="text-white text-decoration-none" to="#" alt="analytics">
                                                                Analytics
                                                            </Link>
                                                            <div className="d-flex justify-content-between">
                                                                <Link className="text-light" to="#" alt="marketing">
                                                                    Marketing
                                                                </Link>
                                                                <img className="btn btn-primary" src={Pro} alt="premium" />
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <Link className="text-light" to="#" alt="crm">
                                                                    CRM
                                                                </Link>
                                                                <img className="btn btn-primary" src={Pro} alt="premium" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* END:  Menu 1 */}


                                            {/* START:  Menu 2 */}
                                            <li className="card p-0 border-0">
                                                <div className="card-header p-0 border-0" id="headingTwo">
                                                    <h4 className="mb-0">
                                                        <button onClick={() => setActiveSection('calendar')} className="d-flex btn btn-dark w-100 px-3 border-0 rounded rounded-0" type="button">
                                                            <Link className="text-light" alt="calendar">
                                                                <img className="pe-3" src={CalendarIcon} alt="icon" />
                                                                Calendar
                                                            </Link>
                                                        </button>
                                                    </h4>
                                                </div>
                                            </li>
                                            {/* END:  Menu 2 */}


                                            {/* START:  Menu 3 */}
                                            <li className="card p-0 border-0">
                                                <div className="card-header p-0 border-0">
                                                    <h4 className="mb-0">
                                                        <button onClick={() => setActiveSection("profile")} className="d-flex btn btn-dark w-100 px-3 border-0 rounded rounded-0 " type="button">
                                                            <Link className="text-light" alt="profile">
                                                                <img className="pe-3" src={ProfileIcon} alt="icon" />
                                                                Profile
                                                            </Link>
                                                        </button>
                                                    </h4>
                                                </div>
                                            </li>
                                            {/* END:  Menu 3 */}


                                            {/* START:  Menu 4 */}
                                            <li className="card p-0 border-0">
                                                <div className="card-header p-0 border-0" id="headingFour">
                                                    <div className="d-flex border-0 w-100 dropdown align-items-center justify-content-between p-0">
                                                        <h4 className="mb-0 w-100">                
                                                            <button onClick={() => setActiveSection("task")} className="d-flex btn btn-dark border-0 rounded rounded-0 w-100 dropdown-toggle align-items-center justify-content-between px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#task" aria-expanded="false" aria-pressed="true" aria-controls="headingFour">
                                                                <Link className="text-light" alt="task">
                                                                    <img className="pe-3" src={TaskIcon} alt="icon" />
                                                                    Task                                                        
                                                                </Link>
                                                            </button>
                                                        </h4>
                                                    </div>
                                                    <div className="collapse bg-dark" id="task" aria-labelledby="task">
                                                        <div className="card-body d-flex flex-column row-gap-3">
                                                            <div className="d-flex">
                                                                <Link className="dropdown-item text-white text-decoration-none" href="#">
                                                                    List
                                                                </Link>
                                                                <img className="btn btn-primary" src={Pro} alt="premium" />
                                                            </div>
                                                            <div className="d-flex">
                                                                <Link className="dropdown-item text-light" href="#">
                                                                    Kanban
                                                                </Link>
                                                                <img className="btn btn-primary" src={Pro} alt="premium" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* END:  Menu 4 */}


                                            {/* START:  Menu 5 */}
                                            <li className="card p-0 border-0">
                                                <div className="card-header p-0 border-0" id="headingFive">
                                                    <div className="d-flex border-0 w-100 dropdown align-items-center justify-content-between p-0">
                                                        <h4 className="mb-0 w-100">                
                                                            <button onClick={() => setActiveSection("forms")} className="d-flex btn btn-dark border-0 rounded rounded-0 w-100 dropdown-toggle align-items-center justify-content-between px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#forms" aria-expanded="false" aria-pressed="true" aria-controls="headingFive">
                                                                <Link className="text-light" alt="forms">
                                                                    <img className="pe-3" src={FormsIcon} alt="icon" />
                                                                    Forms                                                    
                                                                </Link>
                                                            </button>
                                                        </h4>
                                                    </div>
                                                    <div className="collapse bg-dark" id="forms" aria-labelledby="forms">
                                                        <div className="card-body d-flex flex-column row-gap-3">
                                                            <Link className="dropdown-item text-white text-decoration-none" href="#">
                                                                Form Elements
                                                            </Link>
                                                            <Link className="dropdown-item text-light" href="#">
                                                                Form Layout
                                                            </Link>
                                                            <div className="d-flex">
                                                                <Link className="dropdown-item text-light" href="#">
                                                                    Form Validation
                                                                </Link>
                                                                <img className="btn btn-primary" src={Pro} alt="premium" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* END:  Menu 5 */}

                                        
                                            {/* START:  Menu 6 */}
                                            <li className="card p-0 border-0">
                                                <div className="card-header p-0 border-0">
                                                    <h4 className="mb-0">
                                                        <button onClick="tables" className="d-flex btn btn-dark w-100 px-3 border-0 rounded rounded-0" type="button">
                                                            <Link className="text-light" to="#" alt="tables">
                                                                <img className="pe-3" src={TableIcon} alt="icon" />
                                                                Tables
                                                            </Link>
                                                        </button>
                                                    </h4>
                                                </div>
                                            </li>
                                            {/* END:  Menu 6 */}


                                            {/* START:  Menu 7 */}
                                            <li className="card p-0 border-0">
                                                <div className="card-header p-0 border-0" id="headingSeven">
                                                    <div className="d-flex border-0 w-100 dropdown align-items-center justify-content-between p-0">
                                                        <h4 className="mb-0 w-100">                
                                                            <button onClick={() => setActiveSection("pages")} className="d-flex btn btn-dark border-0 rounded rounded-0 w-100 dropdown-toggle align-items-center justify-content-between px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#pages" aria-expanded="false" aria-pressed="true" aria-controls="headingSeven">
                                                                <Link className="text-light" to="#" alt="pages">
                                                                    <img className="pe-3" src={PagesIcon} alt="icon" />
                                                                    Pages                                                    
                                                                </Link>
                                                            </button>
                                                        </h4>
                                                    </div>
                                                    <div className="collapse bg-dark" id="pages" aria-labelledby="pages">
                                                        <div className="card-body d-flex flex-column row-gap-3">
                                                            <Link className="dropdown-item text-white text-decoration-none" href="#settings">
                                                                Settings
                                                            </Link>
                                                            <div className="d-flex">
                                                                <Link className="dropdown-item text-light" href="#file-manager">
                                                                    File Manager
                                                                </Link>
                                                                <img className="btn btn-primary" src={Pro} alt="premium" />
                                                            </div>
                                                            <div className="d-flex">
                                                                <Link className="dropdown-item text-light" href="#data-tables">
                                                                    Data Tables
                                                                </Link>
                                                                <img className="btn btn-primary" src={Pro} alt="premium" />
                                                            </div>
                                                            <div className="d-flex">
                                                                <Link className="dropdown-item text-light" href="#pricing-tables">
                                                                    Pricing Tables
                                                                </Link>
                                                                <img className="btn btn-primary" src={Pro} alt="premium" />
                                                            </div>
                                                            <div className="d-flex">
                                                                <Link className="dropdown-item text-light" href="#error-page">
                                                                    Error Page
                                                                </Link>
                                                                <img className="btn btn-primary" src={Pro} alt="premium" />
                                                            </div>
                                                            <div className="d-flex">
                                                                <Link className="dropdown-item text-light" href="#mail-success">
                                                                    Mail Success
                                                                </Link>
                                                                <img className="btn btn-primary" src={Pro} alt="premium" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* END:  Menu 7 */}

                                        </ul>
                                    </nav>
                                    {/* END:  MENU LINKS */}

                                </div>
                                {/* END:  Aside MENU */}


                                {/* Aside SUPPORT */}
                                <div className="row w-100 mt-4 mx-auto mb-0">

                                    {/* SUPPORT TITLE */}          
                                    <div className="d-flex p-0 mb-3 px-3">
                                        <p className="w-100 header-style m-0 px-3">SUPPORT</p>
                                    </div>
                                    {/*END:  SUPPORT TITLE */}

                                                
                                    {/* SUPPORT LINKS */}
                                    <nav className="row w-100 m-0 px-3">
                                        <ul className="p-0 m-0 row g-1" id="accordion">

                                            {/* START:  Support Menu 1 */}
                                            <li className="card p-0 border-0">
                                                <div className="card-header p-0 border-0">
                                                    <h4 className="mb-0">
                                                        <button className="d-flex btn btn-dark w-100 px-3 border-0 rounded rounded-0" type="button">
                                                            <Link className="text-light" to="#" alt="messages">
                                                                <img className="pe-3 menu-style" src={MessagesIcon} alt="icon" />
                                                                Messages
                                                            </Link>
                                                        </button>
                                                    </h4>
                                                </div>
                                            </li>
                                            {/* END:  Support Menu 1 */}


                                            {/* START:  Support Menu 2 */}
                                            <li className="card p-0 border-0">
                                                <div className="card-header p-0 border-0">
                                                    <h4 className="mb-0">
                                                        <button className="container btn btn-dark w-100 align-items-center border-0 rounded rounded-0" type="button">
                                                            <div className="row w-100 m-0 justify-content-between">

                                                                <div className="col-lg-1 m-0 px-0 justify-content-start">
                                                                    <img className="p-0" src={InboxIcon} alt="icon" />
                                                                </div>

                                                                <div className="col-lg-11 p-0">
                                                                    <div className="row m-0 justify-content-end ps-3">
                                                                        <div className="col-lg-10 d-flex mb-0 px-0">
                                                                            <p className="text-light mb-0">Inbox</p>
                                                                        </div>
                                                                        <div className="col-lg-2 d-flex p-0 justify-content-end">
                                                                            <img className="btn btn-primary" src={Pro} alt="premium" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </button>
                                                    </h4>
                                                </div>
                                            </li>
                                            {/* END:  Support Menu 2 */}


                                            {/* START:  Support Menu 3 */}
                                            <li className="card p-0 border-0">
                                                <div className="card-header p-0 border-0">
                                                    <h4 className="mb-0">
                                                        <button className="container btn btn-dark w-100 align-items-center border-0 rounded rounded-0" type="button">
                                                            <div className="row w-100 m-0 justify-content-between">

                                                                <div className="col-lg-1 m-0 px-0 justify-content-start">
                                                                    <img className="p-0" src={InvoiceIcon} alt="icon" />
                                                                </div>

                                                                <div className="col-lg-11 p-0">
                                                                    <div className="row m-0 justify-content-end ps-3">
                                                                        <div className="col-lg-10 d-flex mb-0 px-0">
                                                                            <p className="text-light mb-0">Invoice</p>
                                                                        </div>
                                                                        <div className="col-lg-2 d-flex p-0 justify-content-end">
                                                                            <img className="btn btn-primary" src={Pro} alt="premium" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </button>
                                                    </h4>
                                                </div>
                                            </li>
                                            {/* END:  Support Menu 3 */}

                                        </ul>
                                    </nav>
                                    {/* END:  SUPPORT LINKS */}

                                </div>
                                {/* END:  Aside SUPPORT */}


                                {/* Aside OTHERS */}
                                <div className="row w-100 mt-4 mx-auto mb-0">

                                    {/* OTHERS TITLE */}
                                    <div className="d-flex p-0 mb-3 px-3">
                                        <p className="w-100 header-style m-0 px-3">OTHERS</p>
                                    </div>
                                    {/* END:  OTHERS TITLE */}

                                            
                                    {/* OTHERS LINKS */}
                                    <nav className="row w-100 m-0 px-3">
                                        <ul className="p-0 m-0 row g-1" id="accordion">

                                            {/* START:  Other Menu 1 */}
                                            <li className="card p-0 border-0">
                                                <div className="card-header p-0 border-0">
                                                    <h4 className="mb-0">
                                                        <button className="d-flex btn btn-dark w-100 px-3 border-0 rounded rounded-0 align-items-center" type="button">
                                                            <Link className="text-light text-decoration-none" to="#" alt="chart">
                                                                <img className="pe-3" src={ChartIcon} alt="icon" />
                                                                Chart
                                                            </Link>
                                                        </button>
                                                    </h4>
                                                </div>
                                            </li>
                                            {/* END:  Other Menu 1 */}


                                            {/* START:  Other Menu 2 */}
                                            <li className="card p-0 border-0">
                                                <div className="card-header p-0 border-0" id="otherTwo">
                                                    <div className="d-flex border-0 rounded rounded-0 w-100 dropdown align-items-center justify-content-between p-0">
                                                        <h4 className="mb-0 w-100">                
                                                            <button className="d-flex btn btn-dark border-0 rounded rounded-0 w-100 dropdown-toggle align-items-center justify-content-between px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#uielements" aria-expanded="false" aria-pressed="true" aria-controls="otherTwo">
                                                                <Link className="text-light text-decoration-none" to="#" alt="ui elements">
                                                                    <img className="pe-3" src={UiElements} alt="icon" />
                                                                    UI Elements                                                    
                                                                </Link>
                                                            </button>
                                                        </h4>
                                                    </div>
                                                    <div className="collapse bg-dark" id="uielements" aria-labelledby="uielements">
                                                        <div className="card-body d-flex flex-column row-gap-3">
                                                            <Link className="text-white text-decoration-none d-flex justify-content-between ps-4" to="#">
                                                                Alerts
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Buttons
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Buttons Group
                                                                <img className="btn btn-primary" src={Pro} alt="icon" />                                                            
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Badge
                                                                <img className="btn btn-primary" src={Pro} alt="icon" />   
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Breadcrumb
                                                                <img className="btn btn-primary" src={Pro} alt="icon" />   
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Cards
                                                                <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Dropdowns
                                                                <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Modals
                                                                <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Tabs
                                                                <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Tooltips
                                                                <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Popovers
                                                                <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Accordion
                                                                <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Notifications
                                                                <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Pagination
                                                                <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Progress
                                                                <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Carousel
                                                                <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Images
                                                                <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                            </Link>
                                                            <Link className="text-light d-flex justify-content-between ps-4" to="#">
                                                                Videos
                                                                <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* END:  Other Menu 2 */}
                                        

                                            {/* START:  Other Menu 3 */}
                                            <li className="card p-0 border-0">
                                                <div className="card-header p-0 border-0" id="otherThree">
                                                    <div className="d-flex border-0 w-100 dropdown align-items-center justify-content-between p-0">
                                                        <h4 className="mb-0 w-100">                
                                                            <button className="d-flex btn btn-dark border-0 rounded rounded-0 w-100 dropdown-toggle align-items-center justify-content-between px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#authentication" aria-expanded="false" aria-controls="otherThree">
                                                                <Link className="text-light text-decoration-none" to="#" alt="authentication">
                                                                    <img className="pe-3" src={AuthIcon} alt="icon" />
                                                                    Authentication
                                                                </Link>
                                                            </button>
                                                        </h4>
                                                    </div>
                                                    <div className="collapse bg-dark" id="authentication" aria-labelledby="authentication">
                                                        <div className="card-body d-flex flex-column row-gap-3">
                                                            <Link className="text-light ps-4" to={"/user/signup"}>
                                                                Sign up
                                                            </Link>
                                                            <Link className="text-light ps-4" to={"/reset-password"}>
                                                                Reset Password
                                                            </Link>
                                                            <Link className="text-white ps-4 text-decoration-none" to={"/logout"} alt="log out">
                                                                Log Out
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* END:  Other Menu 3 */}
                                        
                                        </ul>
                                    </nav>
                                    {/* END:  OTHERS LINKS */}
                                    
                                </div>
                                {/* END:  Aside OTHERS */}
                                {/* ***************************************************************** */}  
                                {/* ***************************************************************** */}  
                            </div>
                        </div>
                    </aside>
                </div>
                {/* ***************************************************************** */}  
                {/* ***************************************************************** */}  




                {/* ***************************************************************** */}  
                {/* SCROLL TO SECTION */}
                {/* ***************************************************************** */}  
                <div className="col-sm-8 col-md-9 col-lg-9 p-0">
                    <section style={{ display: activeSection === 'home' ? 'block' : 'none' }} className="section-container p-0 m-0 mw-100 position-sticky top-0 pb-5">

                        {/* Section Nav */}
                        <div className="row p-0 m-0 justify-content-between position-sticky top-0 bg-white">

                            {/* L:  Search/Notifications */}
                            <div className="col-xl-9 col-lg-9 col-md-8 p-0">
                                <div className="container border-bottom border-1 p-0 row justify-content-between align-items-center m-0 ps-4 pe-2 pt-4 pb-4 pe-lg-0">
                                    <div className="row justify-content-between m-0 w-100 p-0">
                                        <div className="col-xl-3 col-lg-4 col-md-7 px-0 d-flex">
                                            <div className="row border-0 m-0 justify-content-between">
                                                <div className="col-2 d-flex p-0">
                                                    <img className="text-secondary w-50 w-75" src={SearchIcon}  alt="search-icon" /> 
                                                </div>
                                                <div className="col-10 d-flex p-0">
                                                    <input className="text-secondary border-start border-top border-end border-light w-100" type="search" placeholder="Type to search..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 d-flex px-xl-3 px-lg-0 d-block d-xl-block d-lg-block d-md-none">
                                            <div className="row justify-content-between w-100 m-0 h-100" id="toggleNotify">
                                                <div className="col-xl-5 col-lg-5 col-md-5 px-0 d-flex">
                                                    <div class="form-check form-switch p-0 w-100 d-flex">
                                                        <label class="form-check-label justify-content-center" for="flexSwitchCheckDefault">
                                                            <input class="form-check-input mx-0 h-75 d-flex w-75" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-xl-7 col-lg-7 col-md-7 px-0 d-flex">
                                                    <img className="w-50 mw-50 px-2" src={Message} alt="notification-message" />        
                                                    <img className="w-50 mw-50 px-2" src={Notification} alt="chat-message" />        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* END:  Search/Notifications */}

                        {/* ***************************************************************** */}  

                            {/* R:  User Info */}
                            <div className="col-xl-3 col-lg-3 col-md-4 p-0">
                                <div className="container border-sm border-md border-lg border-bottom border-1 p-0 d-flex align-items-center h-100">
                                    <div className="row w-100 p-0 m-0 justify-content-end align-items-center">
                                        <div className="col-xl-8 col-lg-8 col-md-8 p-0 w-100">
                                        
                                            <button className="dropdown-toggle btn align-items-center w-100 m-0 border-0 ps-xl-0 pe-xl-3 ps-lg-0 pe-lg-3 d-flex" data-bs-toggle="collapse" data-bs-target="#userInfo" aria-expanded="false" aria-controls="dashboardDropdown">
                                                <div className="row m-0 w-100 md-flex-column align-items-center justify-content-xl-between justify-content-lg-between justify-content-md-end ps-xl-0 pe-xl-0 px-lg-0 pe-md-3">
                                                    <div className="col-xl-8 col-lg-11 col-md-0 p-0 pe-lg-1">
                                                        <Link className="profile text-dark w-100 d-flex flex-column p-0 justify-content-end align-items-end fw-medium text-lowercase" to={"/admin/dashboard"} alt="profile">
                                                            {userName}
                                                        </Link>
                                                        <small className="text-secondary fw-md d-flex justify-content-end text-lowercase">{usersRole}</small>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-0 col-md-9 p-0 profile-icon d-md-none d-lg-none d-xl-block">
                                                        <img className="w-xl-50" src={DashboardImg} alt="profile-icon" />                                        
                                                    </div>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                {/* END:  User Info */}


                                {/* User Info (Toggle/Options) */}
                                <div className="row position-fixed shadow-lg bg-white">
                                    <div className="collapse px-4 py-2 g-2" id="userInfo" aria-labelledby="dashboardDropdown">
                                        <div className="dropdown-item pb-2">
                                            <Link className="text-dark" to="#" alt="reset password">
                                                CRM Dashboard
                                            </Link>
                                        </div>
                                        <div className="dropdown-item pb-2">
                                            <Link className="text-dark" onClick={handleLogout} to={"/admin/dashboard?logout"} alt="log out">
                                                Logout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* END:  User Info (Toggle/Options) */}

                            </div>
                            {/* User Info:  End */}

                        </div>
                        {/* END:  Section Nav */}



                        {/*********************   SECTION BODY STARTS HERE   *******************/}


                        {/* Section Body:  Row 1 [Date] */}
                        <div className="row m-0 mb-lg-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col">

                                    </div>
                                    <div className="col">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Section Body:  Row 1 [END] */}



                        {/* Section Body:  Row 2 [Bar Chart] */}
                        <div className="row m-0 justify-content-center mb-lg-4">
                            <div className="col-11 m-0 shadow-lg p-4">
                                <BarChartComponent />
                            </div>
                        </div>
                        {/* Section Body:  Row 2 [END] */}



                        {/* Section Body:  Row 3 [Engagements] */}
                        <div className="row m-0 justify-content-center mb-lg-4">
                            <div className="col-11 m-0 p-0 shadow-lg bg-light">
                                <div className="container p-0">
                                    <div className="row m-0 justify-content-between visitors">
                                        <div className="col-3 d-flex flex-column p-0 align-items-center justify-content-center py-4">
                                            <div className="d-flex flex-column w-100 wrapper">
                                                <h4 className="engagements6 d-sm d-md d-lg d-flex justify-content-around">18.6K</h4>
                                                <h6 className="d-flex justify-content-center">Unique Visitors</h6>
                                            </div>
                                        </div>
                                        <div className="col-3 d-flex flex-column p-0 align-items-center justify-content-center py-4">
                                            <div className="d-flex flex-column w-100 wrapper"> 
                                                <h4 className="engagements6 d-sm d-md d-lg d-flex justify-content-around">55.9K</h4>
                                                <h6 className="d-flex justify-content-center">Total Pageviews</h6>
                                            </div>
                                        </div>
                                        <div className="col-3 d-flex flex-column p-0 align-items-center justify-content-center py-4">
                                            <div className="d-flex flex-column w-100 wrapper"> 
                                                <h4 className="engagements6 d-sm d-md d-lg d-flex justify-content-around">54%</h4>
                                                <h6 className="d-flex justify-content-center">Bounce Rate</h6>
                                            </div>
                                        </div>
                                        <div className="col-3 d-flex flex-column p-0 align-items-center justify-content-center py-4">
                                            <div className="d-flex flex-column w-100">
                                                <h4 className="engagements6 d-sm d-md d-lg d-flex justify-content-around">2m 56s</h4>
                                                <h6 className="d-flex justify-content-center">Visit Duration</h6>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Section Body:  Row 3 [END] */}

                                                

                        {/* Section Body:  Row 4 [Map / Countries] */}
                        <div className="row m-0 justify-content-center mb-lg-4">
                            <div className="col-11 d-flex mx-0 px-0">
                                <div className="row w-100 justify-content-between m-0 g-4">

                                    {/* Column 1: [Map] */}
                                    <div className="col-xl-6 px-0 bg-light shadow-lg mt-0">
                                        <div className="d-flex flex-column bg-light px-0">
                                            
                                            {/* MAP ITSELF */}
                                            <div className="col">
                                                {/* Map Title */}
                                                <div className="d-flex px-4 pt-4 pb-4 justify-content-between">
                                                    <h6 className="fw-bold mb-0">Top Countries</h6>
                                                </div>

                                                {/* Map Integration */}
                                                <div className="d-flex maps flex-column">
                                                    <MapComponent />
                                                </div>
                                            </div>
                                            {/* MAP ITSELF */}
                                        {/* ***************************************************************** */}                                
                                            {/* MAP - COUNTRIES */}
                                            <div className="col px-4 py-4">
                                                <div className="row m-0 mb-2 justify-content-between">
                                                    <div className="col-xl-4 col-md-4 d-flex px-0 align-items-center">
                                                        <p className="mb-0">
                                                            <img src={USAFlag} alt="usa flag" /> United States
                                                        </p>
                                                    </div>
                                                    <div className="col-xl-7 col-md-8 d-flex align-items-center px-0">
                                                        <ProgressBar variant="success" now={55} label={35 + '%'} />
                                                    </div>
                                                </div>
                                                <div className="row m-0 mb-2 justify-content-between">
                                                    <div className="col-xl-4 col-md-4 d-flex px-0 align-items-center">
                                                        <p className="mb-0">
                                                            <img src={CanadaFlag} alt="canada flag" /> Canada
                                                        </p>
                                                    </div>
                                                    <div className="col-xl-7 col-md-8 d-flex align-items-center px-0">
                                                        <ProgressBar variant="success" now={48} label={26 + '%'} />
                                                    </div>
                                                </div>
                                                <div className="row m-0 mb-2 justify-content-between">
                                                    <div className="col-xl-4 col-md-4 d-flex px-0 align-items-center">
                                                        <p className="mb-0">
                                                            <img src={FranceFlag} alt="France flag" /> France
                                                        </p>
                                                    </div>
                                                    <div className="col-xl-7 col-md-8 d-flex align-items-center px-0">
                                                        <ProgressBar variant="success" now={38} label={18 + '%'} />
                                                    </div>
                                                </div>
                                                <div className="row m-0 mb-2 justify-content-between">
                                                    <div className="col-xl-4 col-md-4 d-flex px-0 align-items-center">
                                                        <p className="mb-0">
                                                            <img src={ItalyFlag} alt="Italy flag" /> Italy
                                                        </p>
                                                    </div>
                                                    <div className="col-xl-7 col-md-8 d-flex align-items-center px-0">
                                                        <ProgressBar variant="success" now={30} label={14 + '%'} />
                                                    </div>
                                                </div>
                                                <div className="row m-0 mb-2 justify-content-between">
                                                    <div className="col-xl-4 col-md-4 d-flex px-0 align-items-center">
                                                        <p className="mb-0">
                                                            <img src={AustraliaFlag} alt="Australia flag" /> Australia
                                                        </p>
                                                    </div>
                                                    <div className="col-xl-7 col-md-8 d-flex align-items-center px-0">
                                                        <ProgressBar variant="success" now={25} label={10 + '%'} />
                                                    </div>
                                                </div>
                                                <div className="row m-0 mb-2 justify-content-between">
                                                    <div className="col-xl-4 col-md-4 d-flex px-0 align-items-center">
                                                        <p className="mb-0">
                                                            <img src={IndiaFlag} alt="India flag" /> India
                                                        </p>
                                                    </div>
                                                    <div className="col-xl-7 col-md-8 d-flex align-items-center px-0">
                                                        <ProgressBar variant="success" now={20} label={7 + '%'} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* MAP - COUNTRIES */}

                                        </div>
                                    </div>
                                    {/* End:  Column 1: [Map] */}

                                {/* ***************************************************************** */}                                

                                    {/* Column 2: [Top Content & Top Channels] */}
                                    <div className="col-xl-6 px-md-0 ps-xl-4 pe-xl-0 ps-lg-0 pe-lg-0 mt-lg-0 mt-md-4">
                                        <div className="bg-light row m-0 g-4 h-100">    
                                        
                                            {/* Column 1: [Top Content] */}
                                            <div className="col-xl-12 p-0 d-flex flex-column px-4 py-4 shadow-lg bg-light mt-0">
                                                <div className="row justify-content-between m-0 mb-3">
                                                    <div className="col-5 d-flex p-0 justify-content-start">
                                                        <h6 className="fw-bold mb-0">Top Content</h6>
                                                    </div>
                                                    <div className="col-2 d-flex p-0 justify-content-end">
                                                        <img className="w-25" src={moreIcon} alt="click for more" />
                                                    </div>
                                                </div>

                                                <div className="row m-0">
                                                    <div className="col-xl-10 col-md-10 px-0 d-flex">
                                                        <div className="row m-0 w-100">     
                                                            <div className="d-flex flex-column px-0">
                                                                <div className="d-flex justify-content-between mb-3">
                                                                    <p className="text-secondary m-0">URL</p>
                                                                    <p className="text-secondary m-0">Views</p>
                                                                </div>      


                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">
                                                                    / 
                                                                    <p className="mb-0">4.2K</p>
                                                                </div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">
                                                                    /blog 
                                                                    <p className="mb-0">1.9K</p>
                                                                </div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">
                                                                    /reserve/success 
                                                                    <p className="mb-0">1.5K</p>
                                                                </div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">
                                                                    /product/product-details 
                                                                    <p className="mb-0">974</p>
                                                                </div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded">
                                                                    /blog/digital-marketing 
                                                                    <p className="mb-0">179</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-2 col-md-2 d-flex flex-column px-0">
                                                        <div className="text-end d-flex flex-column justify-content-between">

                                                            <div className="row m-0 mb-3">
                                                                <p className="m-0 px-0 d-flex justify-content-end text-secondary">Uniques</p>
                                                            </div>   
                                                                                        
                                                            <div className="row m-0">
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                                    <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">2.1K</p></div>
                                                                </div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                                    <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">139</p></div>
                                                                </div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                                    <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">290</p></div>
                                                                </div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                                    <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">176</p></div>
                                                                </div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                                    <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">57</p></div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End:  Column 1: [Top Content] */}

                                        {/* ***************************************************************** */}
                                        
                                            {/* Column 2: [Top Channels] */}
                                            <div className="col-xl-12 p-0 d-flex flex-column px-4 py-4 shadow-lg bg-light">

                                                <div className="row justify-content-between m-0 mb-3">
                                                    <div className="col-6 d-flex p-0 justify-content-start">
                                                        <h6 className="fw-bold mb-0">Top Channels</h6>
                                                    </div>
                                                    
                                                    <div className="col-2 d-flex p-0 justify-content-end">
                                                        <img className="w-25" src={moreIcon} alt="click for more" />
                                                    </div>
                                                </div>

                                                <div className="row m-0">

                                                    <div className="col-xl-10 col-md-10 px-0 d-flex">
                                                        <div className="row m-0 w-100">     
                                                            <div className="d-flex flex-column px-0">
                                                                
                                                                <div className="d-flex justify-content-between mb-3">
                                                                    <p className="text-secondary m-0">URL</p>
                                                                    <p className="text-secondary m-0">Views</p>
                                                                </div>     


                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">Google <p className="mb-0">4.2K</p></div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">Github <p className="mb-0">1.9K</p></div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">Producthunt <p className="mb-0">1.5K</p></div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">Facebook <p className="mb-0">974</p></div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded">Twitter <p className="mb-0">179</p></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-2 col-md-2 d-flex flex-column px-0">
                                                        <div className="text-end d-flex flex-column justify-content-between">

                                                            <div className="row m-0 mb-3">
                                                                <p className="m-0 px-0 d-flex justify-content-end text-secondary">Uniques</p>
                                                            </div>                            

                                                            <div className="row m-0">
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                                    <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">3.9K</p></div>
                                                                </div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                                    <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">509</p></div>
                                                                </div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                                    <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">986</p></div>
                                                                </div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                                    <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">639</p></div>
                                                                </div>
                                                                <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                                    <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">57</p></div>
                                                                </div>   
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            {/* End:  Column 2: [Top Channels] */}

                                        </div>
                                    </div>
                                    {/* End:  Column 2: [Top Content & Top Channels] */}

                                </div>
                            </div>
                        </div>
                        {/* Section Body:  Row 4 [END] */}
                            


                        {/* Section Body:  Row 5 [Pie Chart] */}
                        <div className="row m-0 justify-content-center mb-lg-5">
                            <div className="col-11 d-flex mx-0 px-0">
                                <div className="row w-100 justify-content-between m-0 g-4">

                                    {/* Column 1: [Pie Chart] */}
                                    <div className="col-xl-5 px-lg-0 px-md-0 py-md-0 mt-0 mx-0 shadow-lg d-flex pb-4 mb-lg-4 mb-md-4">
                                        <div className="d-flex flex-column bg-light px-0 w-100">
                                            
                                            {/* PIE CHART ITSELF */}
                                            <div className="col d-flex flex-column">

                                                {/* Pie Chart Title */}
                                                <div className="d-flex px-4 pt-4 justify-content-between">
                                                    <h6 className="fw-bold mb-0">Visitors Analytics</h6>
                                                </div>
                                                {/* END:  Pie Chart Title */}

                                            {/* ***************************************************************** */}

                                                {/* Pie Chart Integration */}
                                                <div className="px-4 py-5 d-flex justify-content-center">
                                                    <PieChartComponent />
                                                </div>
                                                {/* END:  Pie Chart Integration */}

                                            </div>
                                            {/* PIE CHART ITSELF */}

                                        </div>
                                    </div>
                                    {/* End:  Column 1: [Pie Chart] */}

                                {/* ***************************************************************** */}

                                    {/* Column 2: [Top Channels] */}
                                    <div className="col-xl-7 px-md-0 ps-xl-4 pe-xl-0 ps-lg-0 pe-lg-0 mt-lg-0 mt-md-4">
                                        <div className="bg-light row m-0 g-4 h-100">    

                                            <div className="col-xl-12 p-0 d-flex flex-column px-0 pt-4 pb-5 shadow-lg bg-light mt-0">

                                                {/* Top Channels [TITLE] */}
                                                <div className="row justify-content-between m-0 mb-4 px-4">
                                                    <div className="col d-flex p-0 justify-content-start">
                                                        <h6 className="fw-bold mb-0">Top Channels</h6>
                                                    </div>
                                                </div>
                                                {/* END: Top Channels [TITLE] */}

                                            {/* ***************************************************************** */}

                                                {/* Top Channels [PRODUCTS HEADER] */}
                                                <div className="row m-0 border-top border-bottom px-4">
                                                    <div className="col-xl-10 col-md-10 px-0 d-flex w-100 py-3">
                                                        <div className="row m-0 w-100 justify-content-between">     
                                                            <div className="col-lg-6 px-0 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-gray mb-0">Product Name</p>
                                                            </div>
                                                            <div className="col-lg-2 px-0 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-gray mb-0">Category</p>
                                                            </div>
                                                            <div className="col-lg-1 px-0 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-gray mb-0">Price</p>
                                                            </div>
                                                            <div className="col-lg-1 px-0 d-flex justify-content-lg-center align-items-center">
                                                                <p className="text-gray mb-0">Sold</p>
                                                            </div>
                                                            <div className="col-lg-1 px-0 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-gray mb-0">Profit</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* END:  Top Channels [PRODUCTS HEADER] */}

                                            {/* ***************************************************************** */}

                                                {/* Top Channels [PRODUCTS LIST 1] */}
                                                <div className="row m-0 border-bottom px-4">
                                                    <div className="col-xl-10 col-md-10 px-0 d-flex w-100 py-4">
                                                        <div className="row m-0 w-100 justify-content-between">     
                                                            <div className="col-lg-6 px-0 me-2 d-flex justify-content-lg-start align-items-center">
                                                                <img className="me-3" src={AppleWatch} alt="apple watch series 7" />
                                                                <p className="text-dark mb-0">Apple Watch Series 7</p>
                                                            </div>
                                                            <div className="col-lg-2 px-0 me-2 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-dark mb-0">Electronics</p>
                                                            </div>
                                                            <div className="col-lg-1 px-0 me-3 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-dark mb-0">$269</p>
                                                            </div>
                                                            <div className="col-lg-1 px-0 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-dark mb-0">22</p>
                                                            </div>
                                                            <div className="col-lg-1 px-0 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-success mb-0">$45</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* END:  Top Channels [PRODUCT LIST 1] */}

                                                {/* Top Channels [PRODUCTS LIST 2] */}
                                                <div className="row m-0 border-bottom px-4">
                                                    <div className="col-xl-10 col-md-10 px-0 d-flex w-100 py-4">
                                                        <div className="row m-0 w-100 justify-content-between">     
                                                            <div className="col-lg-6 px-0 me-2 d-flex justify-content-lg-start align-items-center">
                                                                <img className="me-3" src={MacbookPro} alt="Macbook Pro M1" />
                                                                <p className="text-dark mb-0">Macbook Pro M1</p>
                                                            </div>
                                                            <div className="col-lg-2 px-0 me-2 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-dark mb-0">Electronics</p>
                                                            </div>
                                                            <div className="col-lg-1 px-0 me-3 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-dark mb-0">$546</p>
                                                            </div>
                                                            <div className="col-lg-1 px-0 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-dark mb-0">34</p>
                                                            </div>
                                                            <div className="col-lg-1 px-0 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-success mb-0">$125</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* END:  Top Channels [PRODUCT LIST 2] */}

                                                {/* Top Channels [PRODUCTS LIST 3] */}
                                                <div className="row m-0 border-bottom px-4">
                                                    <div className="col-xl-10 col-md-10 px-0 d-flex w-100 py-4">
                                                        <div className="row m-0 w-100 justify-content-between">     
                                                            <div className="col-lg-6 px-0 me-2 d-flex justify-content-lg-start align-items-center">
                                                                <img className="me-3" src={DellInspiron} alt="dell inspiron 15" />
                                                                <p className="text-dark mb-0">Dell Inspiron 15</p>
                                                            </div>
                                                            <div className="col-lg-2 px-0 me-2 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-dark mb-0">Electronics</p>
                                                            </div>
                                                            <div className="col-lg-1 px-0 me-3 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-dark mb-0">$443</p>
                                                            </div>
                                                            <div className="col-lg-1 px-0 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-dark mb-0">64</p>
                                                            </div>
                                                            <div className="col-lg-1 px-0 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-success mb-0">$247</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* END:  Top Channels [PRODUCT LIST 3] */}

                                                {/* Top Channels [PRODUCTS LIST 4] */}
                                                <div className="row m-0 px-4">
                                                    <div className="col-xl-10 col-md-10 px-0 d-flex w-100 py-4">
                                                        <div className="row m-0 w-100 justify-content-between">     
                                                            <div className="col-lg-6 px-0 me-2 d-flex justify-content-lg-start align-items-center">
                                                                <img className="me-3" src={HpProbook} alt="apple watch series 7" />
                                                                <p className="text-dark mb-0">HP Probook 450</p>
                                                            </div>
                                                            <div className="col-lg-2 px-0 me-2 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-dark mb-0">Electronics</p>
                                                            </div>
                                                            <div className="col-lg-1 px-0 me-3 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-dark mb-0">$499</p>
                                                            </div>
                                                            <div className="col-lg-1 px-0 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-dark mb-0">72</p>
                                                            </div>
                                                            <div className="col-lg-1 px-0 d-flex justify-content-lg-start align-items-center">
                                                                <p className="text-success mb-0">$103</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* END:  Top Channels [PRODUCT LIST 4] */}
                                            </div>

                                        </div>
                                    </div>
                                    {/* END:  Column 2: [Top Channels] */}

                                </div>
                            </div>
                        </div> 
                        {/* Section Body:  Row 5 [END] */}

                    </section>

                    <section style={{ display: activeSection === 'calendar' ? 'block' : 'none' }} className="section-container p-0 m-0 mw-100 position-sticky top-0 pb-5">

                        {/* Section Nav */}
                        <div className="row p-0 m-0 justify-content-between position-sticky top-0 bg-white">

                            {/* L:  Search/Notifications */}
                            <div className="col-xl-9 col-lg-9 col-md-8 p-0">
                                <div className="container border-bottom border-1 p-0 row justify-content-between align-items-center m-0 ps-4 pe-2 pt-4 pb-4 pe-lg-0">
                                    <div className="row justify-content-between m-0 w-100 p-0">
                                        <div className="col-xl-3 col-lg-4 col-md-7 px-0 d-flex">
                                            <div className="row border-0 m-0 justify-content-between">
                                                <div className="col-2 d-flex p-0">
                                                    <img className="text-secondary w-50 w-75" src={SearchIcon}  alt="search-icon" /> 
                                                </div>
                                                <div className="col-10 d-flex p-0">
                                                    <input className="text-secondary border-start border-top border-end border-light w-100" type="search" placeholder="Type to search..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 d-flex px-xl-3 px-lg-0 d-block d-xl-block d-lg-block d-md-none">
                                            <div className="row justify-content-between w-100 m-0 h-100" id="toggleNotify">
                                                <div className="col-xl-5 col-lg-5 col-md-5 px-0 d-flex">
                                                    <div className="form-check form-switch p-0 w-100 d-flex">
                                                        <label className="form-check-label justify-content-center" for="flexSwitchCheckDefault">
                                                            <input className="form-check-input mx-0 h-75 d-flex w-75" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-xl-7 col-lg-7 col-md-7 px-0 d-flex">
                                                    <img className="w-50 mw-50 px-2" src={Message} alt="notification-message" />        
                                                    <img className="w-50 mw-50 px-2" src={Notification} alt="chat-message" />        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* END:  Search/Notifications */}

                        {/* ***************************************************************** */}  

                            {/* R:  User Info */}
                            <div className="col-xl-3 col-lg-3 col-md-4 p-0">
                                <div className="container border-sm border-md border-lg border-bottom border-1 p-0 d-flex align-items-center h-100">
                                    <div className="row w-100 p-0 m-0 justify-content-end align-items-center">
                                        <div className="col-xl-8 col-lg-8 col-md-8 p-0 w-100">
                                        
                                            <button className="dropdown-toggle btn align-items-center w-100 m-0 border-0 ps-xl-0 pe-xl-3 ps-lg-0 pe-lg-3 d-flex" data-bs-toggle="collapse" data-bs-target="#userInfo" aria-expanded="false" aria-controls="dashboardDropdown">
                                                <div className="row m-0 w-100 md-flex-column align-items-center justify-content-xl-between justify-content-lg-between justify-content-md-end ps-xl-0 pe-xl-0 px-lg-0 pe-md-3">
                                                    <div className="col-xl-8 col-lg-11 col-md-0 p-0 pe-lg-1">
                                                        <Link className="profile text-dark w-100 d-flex flex-column p-0 justify-content-end align-items-end fw-medium text-lowercase" to={"/admin/dashboard"} alt="profile">
                                                            {userName}
                                                        </Link>
                                                        <small className="text-secondary fw-md d-flex justify-content-end text-lowercase">{usersRole}</small>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-0 col-md-9 p-0 profile-icon d-md-none d-lg-none d-xl-block">
                                                        <img className="w-xl-50" src={DashboardImg} alt="profile-icon" />                                        
                                                    </div>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                {/* END:  User Info */}


                                {/* User Info (Toggle/Options) */}
                                <div className="row position-fixed shadow-lg bg-white">
                                    <div className="collapse px-4 py-2 g-2" id="userInfo" aria-labelledby="dashboardDropdown">
                                        <div className="dropdown-item pb-2">
                                            <Link className="text-dark" to="#" alt="reset password">
                                                CRM Dashboard
                                            </Link>
                                        </div>
                                        <div className="dropdown-item pb-2">
                                            <Link className="text-dark" onClick={handleLogout} to={"/admin/dashboard?logout"} alt="log out">
                                                Logout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* END:  User Info (Toggle/Options) */}

                            </div>
                            {/* User Info:  End */}

                        </div>
                        {/* END:  Section Nav */}



                        {/*********************   SECTION BODY STARTS HERE   *******************/}


                        {/* Section Body:  Row 1 [Dashboard/Calendar] */}
                        <div className="row m-0 mb-lg-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col">

                                    </div>
                                    <div className="col">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Section Body:  Row 1 [END] */}



                        {/* Section Body:  Row 2 [Calendar] */}
                        <div className="row m-0 justify-content-center mb-lg-4">
                            <div className="col-11 m-0 p-0 shadow-lg bg-light">
                                <div className="container p-4">
                                    <MyCalendar />
                                </div>
                            </div>
                        </div>
                        {/* Section Body:  Row 2 [END] */}
                       
                    </section>

                    <section style={{ display: activeSection === 'profile' ? 'block' : 'none' }} className="section-container p-0 m-0 mw-100 position-sticky top-0 pb-5">

                        {/* Section Nav */}
                        <div className="row p-0 m-0 justify-content-between position-sticky top-0 bg-white">

                            {/* L:  Search/Notifications */}
                            <div className="col-xl-9 col-lg-9 col-md-8 p-0">
                                <div className="container border-bottom border-1 p-0 row justify-content-between align-items-center m-0 ps-4 pe-2 pt-4 pb-4 pe-lg-0">
                                    <div className="row justify-content-between m-0 w-100 p-0">
                                        <div className="col-xl-3 col-lg-4 col-md-7 px-0 d-flex">
                                            <div className="row border-0 m-0 justify-content-between">
                                                <div className="col-2 d-flex p-0">
                                                    <img className="text-secondary w-50 w-75" src={SearchIcon}  alt="search-icon" /> 
                                                </div>
                                                <div className="col-10 d-flex p-0">
                                                    <input className="text-secondary border-start border-top border-end border-light w-100" type="search" placeholder="Type to search..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 d-flex px-xl-3 px-lg-0 d-block d-xl-block d-lg-block d-md-none">
                                            <div className="row justify-content-between w-100 m-0 h-100" id="toggleNotify">
                                                <div className="col-xl-5 col-lg-5 col-md-5 px-0 d-flex">
                                                    <div className="form-check form-switch p-0 w-100 d-flex">
                                                        <label className="form-check-label justify-content-center" for="flexSwitchCheckDefault">
                                                            <input className="form-check-input mx-0 h-75 d-flex w-75" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-xl-7 col-lg-7 col-md-7 px-0 d-flex">
                                                    <img className="w-50 mw-50 px-2" src={Message} alt="notification-message" />        
                                                    <img className="w-50 mw-50 px-2" src={Notification} alt="chat-message" />        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* END:  Search/Notifications */}

                        {/* ***************************************************************** */}  

                            {/* R:  User Info */}
                            <div className="col-xl-3 col-lg-3 col-md-4 p-0">
                                <div className="container border-sm border-md border-lg border-bottom border-1 p-0 d-flex align-items-center h-100">
                                    <div className="row w-100 p-0 m-0 justify-content-end align-items-center">
                                        <div className="col-xl-8 col-lg-8 col-md-8 p-0 w-100">
                                        
                                            <button className="dropdown-toggle btn align-items-center w-100 m-0 border-0 ps-xl-0 pe-xl-3 ps-lg-0 pe-lg-3 d-flex" data-bs-toggle="collapse" data-bs-target="#userInfo" aria-expanded="false" aria-controls="dashboardDropdown">
                                                <div className="row m-0 w-100 md-flex-column align-items-center justify-content-xl-between justify-content-lg-between justify-content-md-end ps-xl-0 pe-xl-0 px-lg-0 pe-md-3">
                                                    <div className="col-xl-8 col-lg-11 col-md-0 p-0 pe-lg-1">
                                                        <Link className="profile text-dark w-100 d-flex flex-column p-0 justify-content-end align-items-end fw-medium text-lowercase" to={"/admin/dashboard"} alt="profile">
                                                            {userName}
                                                        </Link>
                                                        <small className="text-secondary fw-md d-flex justify-content-end text-lowercase">{usersRole}</small>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-0 col-md-9 p-0 profile-icon d-md-none d-lg-none d-xl-block">
                                                        <img className="w-xl-50" src={DashboardImg} alt="profile-icon" />                                        
                                                    </div>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                {/* END:  User Info */}


                                {/* User Info (Toggle/Options) */}
                                <div className="row position-fixed shadow-lg bg-white">
                                    <div className="collapse px-4 py-2 g-2" id="userInfo" aria-labelledby="dashboardDropdown">
                                        <div className="dropdown-item pb-2">
                                            <Link className="text-dark" to="#" alt="reset password">
                                                CRM Dashboard
                                            </Link>
                                        </div>
                                        <div className="dropdown-item pb-2">
                                            <Link className="text-dark" onClick={handleLogout} to={"/admin/dashboard?logout"} alt="log out">
                                                Logout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* END:  User Info (Toggle/Options) */}

                            </div>
                            {/* User Info:  End */}

                        </div>
                        {/* END:  Section Nav */}


                    {/*********************   SECTION BODY STARTS HERE   *******************/}


                        {/* Section Body:  Row 1 [Dashboard/Profile] */}
                        <div className="row m-0 mb-lg-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col">

                                    </div>
                                    <div className="col">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Section Body:  Row 1 [END] */}


                        {/* Section Body:  Row 2 [Profile] */}
                        <div className="row m-0 justify-content-center mb-lg-4">
                            <div className="col-11 m-0 p-0 shadow-lg bg-light">
                                <ProfilePage />
                            </div>
                        </div>
                        {/* Section Body:  Row 2 [END] */}

                    </section>

                    <section style={{ display: activeSection === 'task' ? 'block' : 'none' }} className="section-container p-0 m-0 mw-100 position-sticky top-0 pb-5">

                        {/* Section Nav */}
                        <div className="row p-0 m-0 justify-content-between position-sticky top-0 bg-white">

                            {/* L:  Search/Notifications */}
                            <div className="col-xl-9 col-lg-9 col-md-8 p-0">
                                <div className="container border-bottom border-1 p-0 row justify-content-between align-items-center m-0 ps-4 pe-2 pt-4 pb-4 pe-lg-0">
                                    <div className="row justify-content-between m-0 w-100 p-0">
                                        <div className="col-xl-3 col-lg-4 col-md-7 px-0 d-flex">
                                            <div className="row border-0 m-0 justify-content-between">
                                                <div className="col-2 d-flex p-0">
                                                    <img className="text-secondary w-50 w-75" src={SearchIcon}  alt="search-icon" /> 
                                                </div>
                                                <div className="col-10 d-flex p-0">
                                                    <input className="text-secondary border-start border-top border-end border-light w-100" type="search" placeholder="Type to search..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 d-flex px-xl-3 px-lg-0 d-block d-xl-block d-lg-block d-md-none">
                                            <div className="row justify-content-between w-100 m-0 h-100" id="toggleNotify">
                                                <div className="col-xl-5 col-lg-5 col-md-5 px-0 d-flex">
                                                    <div className="form-check form-switch p-0 w-100 d-flex">
                                                        <label className="form-check-label justify-content-center" for="flexSwitchCheckDefault">
                                                            <input className="form-check-input mx-0 h-75 d-flex w-75" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-xl-7 col-lg-7 col-md-7 px-0 d-flex">
                                                    <img className="w-50 mw-50 px-2" src={Message} alt="notification-message" />        
                                                    <img className="w-50 mw-50 px-2" src={Notification} alt="chat-message" />        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* END:  Search/Notifications */}

                        {/* ***************************************************************** */}  

                            {/* R:  User Info */}
                            <div className="col-xl-3 col-lg-3 col-md-4 p-0">
                                <div className="container border-sm border-md border-lg border-bottom border-1 p-0 d-flex align-items-center h-100">
                                    <div className="row w-100 p-0 m-0 justify-content-end align-items-center">
                                        <div className="col-xl-8 col-lg-8 col-md-8 p-0 w-100">
                                        
                                            <button className="dropdown-toggle btn align-items-center w-100 m-0 border-0 ps-xl-0 pe-xl-3 ps-lg-0 pe-lg-3 d-flex" data-bs-toggle="collapse" data-bs-target="#userInfo" aria-expanded="false" aria-controls="dashboardDropdown">
                                                <div className="row m-0 w-100 md-flex-column align-items-center justify-content-xl-between justify-content-lg-between justify-content-md-end ps-xl-0 pe-xl-0 px-lg-0 pe-md-3">
                                                    <div className="col-xl-8 col-lg-11 col-md-0 p-0 pe-lg-1">
                                                        <Link className="profile text-dark w-100 d-flex flex-column p-0 justify-content-end align-items-end fw-medium text-lowercase" to={"/admin/dashboard"} alt="profile">
                                                            {userName}
                                                        </Link>
                                                        <small className="text-secondary fw-md d-flex justify-content-end text-lowercase">{usersRole}</small>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-0 col-md-9 p-0 profile-icon d-md-none d-lg-none d-xl-block">
                                                        <img className="w-xl-50" src={DashboardImg} alt="profile-icon" />                                        
                                                    </div>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                {/* END:  User Info */}


                                {/* User Info (Toggle/Options) */}
                                <div className="row position-fixed shadow-lg bg-white">
                                    <div className="collapse px-4 py-2 g-2" id="userInfo" aria-labelledby="dashboardDropdown">
                                        <div className="dropdown-item pb-2">
                                            <Link className="text-dark" to="#" alt="reset password">
                                                CRM Dashboard
                                            </Link>
                                        </div>
                                        <div className="dropdown-item pb-2">
                                            <Link className="text-dark" onClick={handleLogout} to={"/admin/dashboard?logout"} alt="log out">
                                                Logout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* END:  User Info (Toggle/Options) */}

                            </div>
                            {/* User Info:  End */}

                        </div>
                        {/* END:  Section Nav */}


                    {/*********************   SECTION BODY STARTS HERE   *******************/}


                        {/* Section Body:  Row 1 [Dashboard/Task] */}
                        <div className="row m-0 mb-lg-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col">

                                    </div>
                                    <div className="col">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Section Body:  Row 1 [END] */}


                        {/* Section Body:  Row 2 [Task] */}
                        <div className="row m-0 justify-content-center mb-lg-4">
                            <div className="col-11 m-0 p-0 shadow-lg bg-light">
                                <div className="container p-4">
                                    {/* <TaskPage /> */}
                                </div>
                            </div>
                        </div>
                        {/* Section Body:  Row 2 [END] */}
                    </section>

                    <section style={{ display: activeSection === 'forms' ? 'block' : 'none' }} className="section-container p-0 m-0 mw-100 position-sticky top-0 pb-5">

                        {/* Section Nav */}
                        <div className="row p-0 m-0 justify-content-between position-sticky top-0 bg-white">

                            {/* L:  Search/Notifications */}
                            <div className="col-xl-9 col-lg-9 col-md-8 p-0">
                                <div className="container border-bottom border-1 p-0 row justify-content-between align-items-center m-0 ps-4 pe-2 pt-4 pb-4 pe-lg-0">
                                    <div className="row justify-content-between m-0 w-100 p-0">
                                        <div className="col-xl-3 col-lg-4 col-md-7 px-0 d-flex">
                                            <div className="row border-0 m-0 justify-content-between">
                                                <div className="col-2 d-flex p-0">
                                                    <img className="text-secondary w-50 w-75" src={SearchIcon}  alt="search-icon" /> 
                                                </div>
                                                <div className="col-10 d-flex p-0">
                                                    <input className="text-secondary border-start border-top border-end border-light w-100" type="search" placeholder="Type to search..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 d-flex px-xl-3 px-lg-0 d-block d-xl-block d-lg-block d-md-none">
                                            <div className="row justify-content-between w-100 m-0 h-100" id="toggleNotify">
                                                <div className="col-xl-5 col-lg-5 col-md-5 px-0 d-flex">
                                                    <div className="form-check form-switch p-0 w-100 d-flex">
                                                        <label className="form-check-label justify-content-center" for="flexSwitchCheckDefault">
                                                            <input className="form-check-input mx-0 h-75 d-flex w-75" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-xl-7 col-lg-7 col-md-7 px-0 d-flex">
                                                    <img className="w-50 mw-50 px-2" src={Message} alt="notification-message" />        
                                                    <img className="w-50 mw-50 px-2" src={Notification} alt="chat-message" />        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* END:  Search/Notifications */}

                        {/* ***************************************************************** */}  

                            {/* R:  User Info */}
                            <div className="col-xl-3 col-lg-3 col-md-4 p-0">
                                <div className="container border-sm border-md border-lg border-bottom border-1 p-0 d-flex align-items-center h-100">
                                    <div className="row w-100 p-0 m-0 justify-content-end align-items-center">
                                        <div className="col-xl-8 col-lg-8 col-md-8 p-0 w-100">
                                        
                                            <button className="dropdown-toggle btn align-items-center w-100 m-0 border-0 ps-xl-0 pe-xl-3 ps-lg-0 pe-lg-3 d-flex" data-bs-toggle="collapse" data-bs-target="#userInfo" aria-expanded="false" aria-controls="dashboardDropdown">
                                                <div className="row m-0 w-100 md-flex-column align-items-center justify-content-xl-between justify-content-lg-between justify-content-md-end ps-xl-0 pe-xl-0 px-lg-0 pe-md-3">
                                                    <div className="col-xl-8 col-lg-11 col-md-0 p-0 pe-lg-1">
                                                        <Link className="profile text-dark w-100 d-flex flex-column p-0 justify-content-end align-items-end fw-medium text-lowercase" to={"/admin/dashboard"} alt="profile">
                                                            {userName}
                                                        </Link>
                                                        <small className="text-secondary fw-md d-flex justify-content-end text-lowercase">{usersRole}</small>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-0 col-md-9 p-0 profile-icon d-md-none d-lg-none d-xl-block">
                                                        <img className="w-xl-50" src={DashboardImg} alt="profile-icon" />                                        
                                                    </div>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                {/* END:  User Info */}


                                {/* User Info (Toggle/Options) */}
                                <div className="row position-fixed shadow-lg bg-white">
                                    <div className="collapse px-4 py-2 g-2" id="userInfo" aria-labelledby="dashboardDropdown">
                                        <div className="dropdown-item pb-2">
                                            <Link className="text-dark" to="#" alt="reset password">
                                                CRM Dashboard
                                            </Link>
                                        </div>
                                        <div className="dropdown-item pb-2">
                                            <Link className="text-dark" onClick={handleLogout} to={"/admin/dashboard?logout"} alt="log out">
                                                Logout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* END:  User Info (Toggle/Options) */}

                            </div>
                            {/* User Info:  End */}

                        </div>
                        {/* END:  Section Nav */}


                    {/*********************   SECTION BODY STARTS HERE   *******************/}


                        {/* Section Body:  Row 1 [Dashboard/Forms] */}
                        <div className="row m-0 mb-lg-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col">

                                    </div>
                                    <div className="col">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Section Body:  Row 1 [END] */}


                        {/* Section Body:  Row 2 [Forms] */}
                        <div className="row m-0 justify-content-center mt-4 mb-lg-4">
                            <div className="col-11 m-0 p-0 shadow-lg bg-light">
                                <div className="container p-4">
                                    <FormsPage />
                                </div>
                            </div>
                        </div>
                        {/* Section Body:  Row 2 [END] */}

                    </section>
                </div>
                {/* ***************************************************************** */}  
                {/* ***************************************************************** */}  
            </div>
        </div>
        </>
    )
};



export default Dashboard;

