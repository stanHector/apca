import React from 'react'

const CreateIndicator = () => {

  return (
    <div>
      <div className="container">
        <div className=" text-center mt-5 ">
          <h1 >Create Indicator</h1>
        </div>
        <div className="row ">
          <div className="col-lg-10 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form>
                    <div className="controls">
                      <div className="col-sd-12">
                        <div className="form-group">
                          <label>Fiscal Year Period</label>
                          <select name="need" className="form-control" required="required" data-error="">
                            <option value="" selected disabled>--Select Fiscal Year Period--</option>
                            <option >2020/2021</option>
                            <option >2021/2022</option>
                            {/* <option >Request order status</option>
                              <option >Haven't received cashback yet</option>
                              <option >Other</option> */}
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label >Name of Indicator</label>
                            <input type="text" name="oct-dec" class="form-control" required="required" data-error="" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>OCT-DEC *</label>
                            <input type="number" name="oct-dec" class="form-control" required="required" data-error="field is required." />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label>JAN-MAR *</label>
                            <input type="number" name="jan-mar" class="form-control" required="required" data-error="" />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>APR-JUN *</label>
                            <input type="number" name="apr-jun" class="form-control" required="required" data-error="" />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label >JUL-SEPT *</label>
                            <input type="number" name="jul-sep" class="form-control" required="required" data-error="" />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label>Total *</label>
                            <input type="number" name="total" class="form-control" required="required" data-error="" />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label>Total SAR 2015/2016 *</label>
                            <input type="number" name="total-sar-2015/2016" class="form-control" required="required" data-error="" />
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="form-group">
                            <label>Total SAR 2014/2015 *</label>
                            <input type="number" name="total-sar-2014/2015" class="form-control" required="required" data-error="" />
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="form-group">
                            <label>Total SAR 2013/2014 *</label>
                            <input type="number" name="total-sar-2013/2014" class="form-control" required="required" data-error="" />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label>Total SAR 2012/2013 *</label>
                            <input type="number" name="total-sar-2012/2013" class="form-control" required="required" data-error="" />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Total SAR 2011/2012 *</label>
                            <input type="number" name="total-sar-2011/2012" class="form-control" required="required" data-error="" />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label>JUL-SEPT *</label>
                            <input type="number" name="jul-sep" class="form-control" required="required" data-error="" />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label>Total Cummulative -5 Year Period *</label>
                            <input type="number" name="cummulative" class="form-control" required="required" data-error="" />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label for="form_message">Remark *</label>
                            <textarea id="form_message" name="message" class="form-control" placeholder="Write remarks here." rows="5" required="required" data-error="Please, write a remark."></textarea>
                          </div>
                        </div>

                        <div class="col-md-12">
                          <input type="submit" class="btn btn-success btn-send  pt-2 btn-block" value="Save" />
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

export default CreateIndicator;
