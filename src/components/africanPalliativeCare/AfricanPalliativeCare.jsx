import React from 'react'
import styled from "styled-components";
import { PageSytles } from "../../styles/globalStyles";

const Container = styled.div`
  ${PageSytles}
`;

const AfricanPalliativeCare = () => {
  return (
    <Container>
      <div>
        <div className="container">
          <div className="row ">
            {/* <div className=" text-center mt-5 ">
              <h1>A functional African palliative care research network in place</h1>
            </div> */}
            <div className="col-lg-9 mx-auto">
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
                            <label style={{ fontWeight: "bold", alignItems: "center", justifyContent: "center" }}>A functional African palliative care research network in place</label>
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

                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label style={{ fontWeight: "bold" }}>Total *</label>
                              <input type="number" name="total" className="form-control" required="required" data-error="" />
                            </div>
                          </div>
                        </div>

                        <div className="col-sd-6">
                          <div className="form-group">
                            <label style={{ fontWeight: "bold" }}>Total SAR</label>
                            <select name="need" className="form-control" required="required" data-error="">
                              <option value="" selected disabled>--Select Total SAR--</option>
                              <option>2000/2001</option>
                              <option>2001/2002</option>
                              <option>2002/2003</option>
                              <option>2003/2004</option>
                              <option>2004/2005</option>
                              <option>2005/2006</option>
                              <option>2006/2007</option>
                              <option>2007/2008</option>
                              <option>2008/2009</option>
                              <option>2009/2010</option>
                              <option>2010/2011</option>
                              <option>2011/2012</option>
                              <option>2012/2013</option>
                              <option>2013/2014</option>
                              <option>2014/2015</option>
                              <option>2015/2016</option>
                              <option>2016/2017</option>
                              <option>2017/2018</option>
                              <option>2018/2019</option>
                              <option>2019/2020</option>
                              <option>2020/2021</option>
                              <option>2021/2022</option>
                            </select>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label style={{ fontWeight: "bold" }}>Value *</label>
                              <input type="number" name="total-sar-2015/2016" className="form-control" required="required" data-error="" />
                            </div>
                          </div>

                          <div className="col-sd-6">
                            <div className="form-group">
                              <label style={{ fontWeight: "bold" }}>FY1</label>
                              <select name="need" className="form-control" required="required" data-error="">
                                <option value="" selected disabled>--Select FY1--</option>
                                <option>2000/2001</option>
                                <option>2001/2002</option>
                                <option>2002/2003</option>
                                <option>2003/2004</option>
                                <option>2004/2005</option>
                                <option>2005/2006</option>
                                <option>2006/2007</option>
                                <option>2007/2008</option>
                                <option>2008/2009</option>
                                <option>2009/2010</option>
                                <option>2010/2011</option>
                                <option>2011/2012</option>
                                <option>2012/2013</option>
                                <option>2013/2014</option>
                                <option>2014/2015</option>
                                <option>2015/2016</option>
                                <option>2016/2017</option>
                                <option>2017/2018</option>
                                <option>2018/2019</option>
                                <option>2019/2020</option>
                                <option>2020/2021</option>
                                <option>2021/2022</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group">
                              <label style={{ fontWeight: "bold" }}>Value *</label>
                              <input type="number" name="total-sar-2014/2015" className="form-control" required="required" data-error="" />
                            </div>
                          </div>
                        </div>

                        <div className="col-sd-6">
                          <div className="form-group">
                            <label style={{ fontWeight: "bold" }}>FY2</label>
                            <select name="need" className="form-control" required="required" data-error="">
                              <option value="" selected disabled>--Select FY2--</option>
                              <option>2000/2001</option>
                              <option>2001/2002</option>
                              <option>2002/2003</option>
                              <option>2003/2004</option>
                              <option>2004/2005</option>
                              <option>2005/2006</option>
                              <option>2006/2007</option>
                              <option>2007/2008</option>
                              <option>2008/2009</option>
                              <option>2009/2010</option>
                              <option>2010/2011</option>
                              <option>2011/2012</option>
                              <option>2012/2013</option>
                              <option>2013/2014</option>
                              <option>2014/2015</option>
                              <option>2015/2016</option>
                              <option>2016/2017</option>
                              <option>2017/2018</option>
                              <option>2018/2019</option>
                              <option>2019/2020</option>
                              <option>2020/2021</option>
                              <option>2021/2022</option>
                            </select>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label style={{ fontWeight: "bold" }}>Value *</label>
                              <input type="number" name="total-sar-2013/2014" className="form-control" required="required" data-error="" />
                            </div>
                          </div>

                          <div className="col-sd-6">
                            <div className="form-group">
                              <label style={{ fontWeight: "bold" }}>FY3</label>
                              <select name="need" className="form-control" required="required" data-error="">
                                <option value="" selected disabled>--Select FY3--</option>
                                <option>2000/2001</option>
                                <option>2001/2002</option>
                                <option>2002/2003</option>
                                <option>2003/2004</option>
                                <option>2004/2005</option>
                                <option>2005/2006</option>
                                <option>2006/2007</option>
                                <option>2007/2008</option>
                                <option>2008/2009</option>
                                <option>2009/2010</option>
                                <option>2010/2011</option>
                                <option>2011/2012</option>
                                <option>2012/2013</option>
                                <option>2013/2014</option>
                                <option>2014/2015</option>
                                <option>2015/2016</option>
                                <option>2016/2017</option>
                                <option>2017/2018</option>
                                <option>2018/2019</option>
                                <option>2019/2020</option>
                                <option>2020/2021</option>
                                <option>2021/2022</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group">
                              <label style={{ fontWeight: "bold" }}>Value*</label>
                              <input type="number" name="total-sar-2012/2013" className="form-control" required="required" data-error="" />
                            </div>
                          </div>

                          <div className="col-sd-6">
                            <div className="form-group">
                              <label style={{ fontWeight: "bold" }}>FY4</label>
                              <select name="need" className="form-control" required="required" data-error="">
                                <option value="" selected disabled>--Select FY4--</option>
                                <option>2000/2001</option>
                                <option>2001/2002</option>
                                <option>2002/2003</option>
                                <option>2003/2004</option>
                                <option>2004/2005</option>
                                <option>2005/2006</option>
                                <option>2006/2007</option>
                                <option>2007/2008</option>
                                <option>2008/2009</option>
                                <option>2009/2010</option>
                                <option>2010/2011</option>
                                <option>2011/2012</option>
                                <option>2012/2013</option>
                                <option>2013/2014</option>
                                <option>2014/2015</option>
                                <option>2015/2016</option>
                                <option>2016/2017</option>
                                <option>2017/2018</option>
                                <option>2018/2019</option>
                                <option>2019/2020</option>
                                <option>2020/2021</option>
                                <option>2021/2022</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group">
                              <label style={{ fontWeight: "bold" }}>Value *</label>
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
    </Container>
  )
}
export default AfricanPalliativeCare;