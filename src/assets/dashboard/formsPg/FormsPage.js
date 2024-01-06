import React, { useState } from "react";
import DatePicker from 'react-datepicker';







const FormsPage = () => {
    
    const [startDate, setStartDate] = useState(new Date());
    

    return (
        <>
            <div className="row justify-content-xl-between">
                <div className="col-6 col-xl-6 col-lg-6 col-md-12 px-3 pe-xl-4">
                    <div className="row">
                        <div className="col-xl-12 col-md-12">
                            <div className="card">
                                <div className="card-title border-bottom px-4 py-3 text-dark">
                                    Input Fields
                                </div>
                                <div className="card-body px-4">
                                    <label className="pb-xl-3 mb-2" htmlFor="default-input">Default input
                                        <input className="form-control px-3 py-2 mt-2 border" type="text" name="default-input" placeholder="Default input text" />
                                    </label>
                                    <label className="pb-xl-3 mb-2" htmlFor="active-input">Active input
                                        <input className="form-control px-3 py-2 mt-2 border border-primary" type="text" name="active-input" placeholder="Active input text" />
                                    </label>
                                    <label className="pb-xl-3" htmlFor="disabled-input">Disabled input
                                        <input className="form-control px-3 py-2 mt-2" type="text" name="disabled-input" placeholder="Disabled input text" disabled="true" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-12 mt-xl-0 mt-5 mt-xl-5 mt-lg-4 mt-md-4">
                            <div className="card">
                                <div className="card-title border-bottom px-4 py-3 text-dark">
                                    Toggle switch input
                                </div>
                                <div className="card-body px-4">
                                    <div className="container d-flex flex-column px-0 row-gap-3">
                                        <div className="row d-flex mx-0">
                                            <div className="col-2 d-flex px-0 me-4">
                                                <div class="form-check form-switch d-flex w-100 px-0 h-100">
                                                    <label class="form-check-label d-flex w-100" for="flexSwitchCheckDefault">
                                                    </label>
                                                    <input class="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                </div>
                                            </div>
                                            <div className="col-2 d-flex px-0">
                                                <div class="form-check form-switch d-flex w-100 px-0 h-100">
                                                    <label class="form-check-label d-flex w-100" for="flexSwitchCheckChecked">
                                                    </label>
                                                    <input class="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row d-flex mx-0">
                                            <div className="col-2 d-flex px-0 me-4">
                                                <div class="form-check form-switch d-flex w-100 px-0 h-100">
                                                    <label class="form-check-label d-flex w-100" for="flexSwitchCheckDefault">
                                                    </label>
                                                    <input class="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                </div>
                                            </div>
                                            <div className="col-2 d-flex px-0">
                                                <div class="form-check form-switch d-flex w-100 px-0 h-100">
                                                    <label class="form-check-label d-flex w-100" for="flexSwitchCheckChecked">
                                                    </label>
                                                    <input class="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row d-flex mx-0">
                                            <div className="col-2 d-flex px-0 me-4">
                                                <div class="form-check form-switch d-flex w-100 px-0 h-100">
                                                    <label class="form-check-label d-flex w-100" for="flexSwitchCheckDefault">
                                                    </label>
                                                    <input class="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                </div>
                                            </div>
                                            <div className="col-2 d-flex px-0">
                                                <div class="form-check form-switch d-flex w-100 px-0 h-100">
                                                    <label class="form-check-label d-flex w-100" for="flexSwitchCheckChecked">    
                                                    </label>
                                                    <input class="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row d-flex mx-0">
                                            <div className="col-2 d-flex px-0 me-4">
                                                <div class="form-check form-switch d-flex w-100 px-0 h-100">
                                                    <label class="form-check-label d-flex w-100" for="flexSwitchCheckDefault">
                                                    </label>
                                                    <input class="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                </div>
                                            </div>
                                            <div className="col-2 d-flex px-0">
                                                <div class="form-check form-switch d-flex w-100 px-0 h-100">
                                                    <label class="form-check-label d-flex w-100" for="flexSwitchCheckDefault">
                                                    </label>
                                                    <input class="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                              
                                </div>
                            </div>      
                        </div>
                        <div className="col-xl-12 col-md-12 mt-xl-0 mt-5 mt-xl-5 mt-lg-4 mt-md-4">
                            <div className="card">
                                <div className="card-title border-bottom px-4 py-3 text-dark">
                                    Time and date
                                </div>
                                <div className="card-body px-4">
                                    <div className="container d-flex flex-column px-0 row-gap-3">
                                        <div className="row d-flex mx-0">
                                            <div className="col-12 d-flex px-0 me-4">
                                                <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>      
                        </div>
                    </div>

                </div>               
                <div className="col-6 col-xl-6 col-lg-6 col-md-12 px-3 ps-xl-4 py-0 py-xl-0 py-md-5">
                    <div className="row">
                        <div className="col-xl-12 col-md-12">
                            <div className="card">
                                <div className="card-title border-bottom px-4 py-3 text-dark">
                                    Textarea Fields
                                </div>
                                <div className="card-body px-4">
                                        <label className="form-label pb-xl-3 mb-2" htmlFor="default-textarea">Default textarea
                                            <textarea className="form-control px-3 py-2 mt-2 border h-5 pt-2 " id="default-textarea" name="default-textarea" placeholder="Default input textarea" rows="4"></textarea>
                                        </label>
                                        <label className="form-label pb-xl-3 mb-2" htmlFor="active-textarea">Active textarea
                                            <textarea className="form-control px-3 py-2 mt-2 h-5 border-primary pt-2" id="active-textarea" name="active-textarea" placeholder="Active input textarea" rows="4"></textarea>
                                        </label>
                                        <label className="form-label pb-xl-3" htmlFor="disabled-textarea">Disabled textarea
                                            <textarea className="form-control px-3 py-2 mt-2 h-5 pt-2" id="disabled-textarea" name="disabled-textarea" placeholder="Disabled input textarea" disabled="true" rows="4"></textarea>
                                        </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-12 mt-xl-0 mt-5 mt-xl-5 mt-lg-4 mt-md-4">
                            <div className="card">
                                <div className="card-title border-bottom px-4 py-3 mb-4 text-dark">
                                    Checkbox and radio
                                </div>
                                <div className="d-flex flex-column mb-3">
                                    <div className="form-check px-xl-4 px-md-4 d-flex mx-0 w-100 justify-content-xl-start justify-content-md-between">
                                        <div className="col-xl-5 col-md-6 d-flex me-xl-4 me-md-0 align-items-center">
                                            <input className="form-check-input d-flex ms-auto me-1 my-0 px-auto" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label text-gray" for="flexCheckDefault">Checkbox Text</label>
                                        </div>
                                        <div className="col-xl-5 col-md-6 d-flex me-xl-4 me-md-0 align-items-center">
                                            <input className="form-check-input d-flex ms-auto me-1 my-0 px-auto" type="checkbox" value="" id="flexCheckChecked" checked />
                                            <label className="form-check-label text-gray" for="flexCheckChecked">Checkbox Text</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-column mb-3">
                                    <div className="form-check px-xl-4 px-md-4 d-flex mx-0 w-100 justify-content-xl-start justify-content-md-between">
                                        <div className="col-xl-5 col-md-6 d-flex me-xl-4 me-md-0 align-items-center">
                                            <input className="form-check-input d-flex ms-auto me-1 my-0 px-auto" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label text-gray" for="flexCheckDefault">Checkbox Text</label>
                                        </div>
                                        <div className="col-xl-5 col-md-6 d-flex me-xl-4 me-md-0 align-items-center">
                                            <input className="form-check-input d-flex ms-auto me-1 my-0 px-auto" type="checkbox" value="" id="flexCheckChecked" checked />
                                            <label className="form-check-label text-gray" for="flexCheckChecked">Checkbox Text</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-column mb-3">
                                    <div className="form-check px-xl-4 px-md-4 d-flex mx-0 w-100 justify-content-xl-start justify-content-md-between">
                                        <div className="col-xl-5 col-md-6 d-flex me-xl-4 me-md-0 align-items-center">
                                            <input className="form-check-input d-flex ms-auto me-1 my-0 px-auto" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label text-gray" for="flexCheckDefault">Checkbox Text</label>
                                        </div>
                                        <div className="col-xl-5 col-md-6 d-flex me-xl-4 me-md-0 align-items-center">
                                            <input className="form-check-input d-flex ms-auto me-1 my-0 px-auto" type="checkbox" value="" id="flexCheckChecked" checked />
                                            <label className="form-check-label text-gray" for="flexCheckChecked">Checkbox Text</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-column mb-3">
                                    <div className="form-check px-xl-4 px-md-4 d-flex mx-0 w-100 justify-content-xl-start justify-content-md-between">
                                        <div className="col-xl-5 col-md-6 d-flex me-xl-4 me-md-0 align-items-center">
                                            <input className="form-check-input d-flex ms-auto me-1 my-0 px-auto" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label text-dark" for="flexCheckDefault">Checkbox Text</label>
                                        </div>
                                        <div className="col-xl-5 col-md-6 d-flex me-xl-4 me-md-0 align-items-center">
                                            <input className="form-check-input d-flex ms-auto me-1 my-0 px-auto" type="checkbox" value="" id="flexCheckChecked" checked />
                                            <label className="form-check-label text-dark" for="flexCheckChecked">Checkbox Text</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-column mb-3">
                                    <div className="form-check px-xl-4 px-md-4 d-flex mx-0 w-100 justify-content-xl-start justify-content-md-between">
                                        <div className="col-xl-5 col-md-6 d-flex me-xl-4 me-md-0 align-items-center">
                                            <input className="form-check-input d-flex ms-auto me-1 my-0 px-auto" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label text-dark" for="flexCheckDefault">Checkbox Text</label>
                                        </div>
                                        <div className="col-xl-5 col-md-6 d-flex me-xl-4 me-md-0 align-items-center">
                                            <input className="form-check-input d-flex ms-auto me-1 my-0 px-auto" type="checkbox" value="" id="flexCheckChecked" checked />
                                            <label className="form-check-label text-dark" for="flexCheckChecked">Checkbox Text</label>
                                        </div>
                                    </div>
                                </div>
                            </div>      
                        </div>
                    </div>
                </div>  
            </div>
        </>
    );

}


export default FormsPage;