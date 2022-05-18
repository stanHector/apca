import React from 'react'

const Education = () => {

    return (
        <div>
            <div className="container">
                <div className=" text-center mt-5 ">
                    <h1>Education</h1>
                </div>
                <div className="row ">
                    <div className="col-lg-8 mx-auto">
                        <div className="card mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-light">
                                <div className="container">
                                    <form>
                                        <div className="controls">
                                            {/* <p style={{ color: "#A355AF", fontSize: "13px" }}>To provide leadership and coordination for palliative care integration into health policies, education programmes and health services in Africa</p> */}

                                            <div className='row'>
                                                <div className="col-sd-6">
                                                    <div className="form-group">
                                                        <label style={{ fontWeight: "bold" }}>Fiscal Year Period</label>
                                                        <select name="need" className="form-control" required="required" data-error="">
                                                            <option value="" selected disabled>--Select Fiscal Year Period--</option>
                                                            <option>2020/2021</option>
                                                            <option>2021/2022</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-sd-6">
                                                    <div className="form-group">
                                                        <label style={{ fontWeight: "bold" }}>Education</label>
                                                        <select name="need" className="form-control" required="required" data-error="">
                                                            <option value="" selected disabled>--Select Education--</option>
                                                            <option>Number of countries that developed specialist PC training programs during this period</option>
                                                            <option>Number of countries that developed a national PC training package during this period</option>
                                                            <option>Number of institutions/organizations provided with PC training materials, resources and equipment</option>
                                                            <option>Number of care providers who received pre-service PC training </option>
                                                            <option>Number of care providers who successfully completed an in-service basic PC training programme</option>
                                                            <option>Number of care providers supported to have specialist PC skills </option>
                                                            <option>Number of care providers and educators supported to have PC training skills (ToT)</option>
                                                            <option>Number of community volunteers who successfully completed a PC training programme</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label style={{ fontWeight: "bold" }}>OCT-DEC *</label>
                                                        <input type="number" name="oct-dec" className="form-control" required="required" data-error="field is required." />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label style={{ fontWeight: "bold" }}>JAN-MAR *</label>
                                                        <input type="number" name="jan-mar" className="form-control" required="required" data-error="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label style={{ fontWeight: "bold" }}>APR-JUN *</label>
                                                        <input type="number" name="apr-jun" className="form-control" required="required" data-error="" />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label style={{ fontWeight: "bold" }}>JUL-SEPT *</label>
                                                        <input type="number" name="jul-sep" className="form-control" required="required" data-error="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{ fontWeight: "bold" }}>Total *</label>
                                                        <input type="number" name="total" className="form-control" required="required" data-error="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{ fontWeight: "bold" }}>Total SAR 2015/2016 *</label>
                                                        <input type="number" name="total-sar-2015/2016" className="form-control" required="required" data-error="" />
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{ fontWeight: "bold" }}>Total SAR 2014/2015 *</label>
                                                        <input type="number" name="total-sar-2014/2015" className="form-control" required="required" data-error="" />
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{ fontWeight: "bold" }}>Total SAR 2013/2014 *</label>
                                                        <input type="number" name="total-sar-2013/2014" className="form-control" required="required" data-error="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{ fontWeight: "bold" }}>Total SAR 2012/2013 *</label>
                                                        <input type="number" name="total-sar-2012/2013" className="form-control" required="required" data-error="" />
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{ fontWeight: "bold" }}>Total SAR 2011/2012 *</label>
                                                        <input type="number" name="total-sar-2011/2012" className="form-control" required="required" data-error="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{ fontWeight: "bold" }}>Total Cummulative -5 Year Period *</label>
                                                        <input type="number" name="cummulative" className="form-control" required="required" data-error="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{ fontWeight: "bold" }}>Remark *</label>
                                                        <textarea name="message" className="form-control" placeholder="Write remarks here." rows="5" required="required" data-error="Please, write a remark."></textarea>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <input type="submit" className="btn btn-success" style={{ width: "200px" }} value="Save" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education;
