import React from "react";
// import { Link } from "react-router-dom";
import CoverImg from "../../img/profile-cover-img.svg";
// import UploadCoverImg from "../../img/upload-cover-img.svg";
import ProfileImg from "../../img/profile-img.svg";
// import UploadProfileImg from "../../img/upload-img.svg";
import FacebookIcon from "../../img/profileFacebook.svg";
import LinkedInIcon from "../../img/profileLinkedIn.svg";
import TwitterColoredIcon from "../../img/profileTwitter.svg";
import WorldIcon from "../../img/profileWorldIcon.svg";
import GithubIcon from "../../img/profileGithub.svg";







const ProfilePage = () => {

    console.clear();
    const isLoggedIn = JSON.parse(localStorage.getItem("user"));
    const userFirstName = isLoggedIn ? isLoggedIn.firstName : handleLogout();
    const userLastName = isLoggedIn ? isLoggedIn.lastName : handleLogout();
    const userProfile = userFirstName + " " + userLastName;
    const userRole = isLoggedIn ? isLoggedIn.roles : handleLogout();
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

            // console.log("Admin Role: " + n + ",\n Account User: " + JSON.stringify(userRole[n]));
        }
    }
  
    

    function handleLogout() {
        localStorage.clear();
        const redirToLogin = "/user/login";
        window.location.replace(redirToLogin);
    }



    return (
        <>
            <div className="container-fluid px-0">
                <div className="row m-0 pb-5 mb-5">
                    <div className="col-12 p-0">
                        <img className="w-100" src={CoverImg} alt="cover-img" />
                    </div>
                    <div className="col-12 justify-content-center position-relative">
                        <div className="position-absolute top-100 start-50 translate-middle">
                            <img className="" src={ProfileImg} alt="profile-img" />
                        </div>
                    </div>
                </div>
            
                <div className="row m-0 justify-content-center align-items-center">
                    <div className="col-12 text-center pb-4">
                        <p className="text-center fw-normal user mb-0 pb-2">{userProfile}</p>
                        <p className="p-0 text-center text-lowercase user">{usersRole}</p>
                    </div>
                    
                    <div className="col-6 m-0 p-0 shadow-lg bg-light">
                        <div className="container p-0">
                            <div className="row m-0 justify-content-between rounded shadow-lg profile px-3">
                                <div className="col-3 d-flex flex-column p-0 align-items-center justify-content-center py-4">
                                    <div className="d-flex w-100 wrapper align-items-center justify-content-center">
                                        <h4 className="mb-0 pe-2 post-count">259</h4>
                                        <h6 className="mb-0 stat-title">Posts</h6>
                                    </div>
                                </div>
                                <div className="col-5 d-flex flex-column p-0 align-items-center justify-content-center py-4">
                                    <div className="d-flex w-100 wrapper align-items-center justify-content-center"> 
                                        <h4 className="mb-0 pe-2 follow-count">129K</h4>
                                        <h6 className="mb-0 stat-title">Followers</h6>
                                    </div>
                                </div>
                                <div className="col-4 d-flex flex-column p-0 align-items-center justify-content-center py-4">
                                    <div className="d-flex w-100 align-items-center justify-content-center"> 
                                        <h4 className="mb-0 pe-2 following-count">2K</h4>
                                        <h6 className="mb-0 stat-title">Following</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 pt-5 pb-4">
                        <p className="text-center about-user">About Me</p>
                        <p className="text-center about-user-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.</p>
                    </div>

                    <div className="col-4 mb-5 pb-5 d-flex flex-column align-items-center">
                        <div className="pb-4">
                            <p className="text-center mb-0 about-user">Follow me on</p>
                         </div>
                        <div className="col-5 d-flex justify-content-between">
                            <img className="profile facebook bg-gray" src={FacebookIcon} alt="Facebook" />
                            <img className="profile" src={TwitterColoredIcon} alt="Twitter" />
                            <img className="profile linkedin bg-gray" src={LinkedInIcon} alt="LinkedIn" />
                            <img className="profile website bg-gray" src={WorldIcon} alt="Website" />
                            <img className="profile github bg-gray" src={GithubIcon} alt="Github" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
}


export default ProfilePage;