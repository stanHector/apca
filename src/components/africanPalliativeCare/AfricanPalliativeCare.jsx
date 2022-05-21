import React from 'react'

export const AfricanPalliativeCare = () => {
  return (
    <div>
    <div className="container">
      <div className=" text-center mt-5 ">
        <h1>A functional African palliative care research network in place</h1>
      </div>
      <div className="row ">
        <div className="col-lg-8 mx-auto">
          <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
              <div className="container">
                <form>
                  <div className="controls">
                    <p style={{ color: "#A355AF", fontSize: "13px" }}>To develop an evidence base for palliative care in Africa</p>
                    <div className="col-sd-12">
                      <div className="form-group">
                        <label style={{ fontWeight: "bold" }}>Fiscal Year Period</label>
                        <select name="need" className="form-control" required="required" data-error="">
                          <option value="" selected disabled>--Select Fiscal Year Period--</option>
                          <option>2020/2021</option>
                          <option>2021/2022</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-sd-12">
                      <div className="form-group">
                        <label style={{ fontWeight: "bold", alignItems:"center", justifyContent:"center" }}>A functional African palliative care research network in place</label>
                        <select name="need" className="form-control" required="required" data-error="">
                          <option value="" selected disabled>--Select a functional African palliative care research network in place--</option>
                          <option>Number of a functional  research network for PC in place in Africa</option>
                          <option>Number of African PC research network task forces/committees formed during this period</option>
                          <option>Number of organizations recruited in the research network during this period</option>
                          <option>Number of members recruited in the research network during this period</option>
                          <option>Number of active research network hubs during this period</option>
                          <option>Number of new research collaborations established during this period</option>
                        </select>
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label style={{ fontWeight: "bold" }}>Total SAR 2015/2016 *</label>
                          <input type="number" name="total-sar-2015/2016" className="form-control" required="required" data-error="" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label style={{ fontWeight: "bold" }}>Total SAR 2014/2015 *</label>
                          <input type="number" name="total-sar-2014/2015" className="form-control" required="required" data-error="" />
                        </div>
                      </div>

                    </div>

                    <div className="row">
                      
                    <div className="col-md-6">
                        <div className="form-group">
                          <label style={{ fontWeight: "bold" }}>Total SAR 2013/2014 *</label>
                          <input type="number" name="total-sar-2013/2014" className="form-control" required="required" data-error="" />
                        </div>
                      </div>
                      
                      <div className="col-md-6">
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
