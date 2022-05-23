import React from "react";
import styled from "styled-components";
import { PageSytles } from "../../styles/globalStyles";

const Container = styled.div`
  ${PageSytles}
`;

const Education = () => {
  return <Container>  <div>

    <div className="container">
      <div className="row ">
        <div className=" text-center mt-5 ">
          <h1>Education</h1>
        </div>

        <div className="col-lg-9 mx-auto">
          <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
              <div className="container">
                <form>
                  <div className="controls">
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
                        <label style={{ fontWeight: "bold" }}>Education</label>
                        <select name="need" className="form-control" required="required" data-error="">
                          <option value="" selected disabled>--Select Education--</option>
                          <option>Number of countries that developed specialist PC training programs during this period</option>
                          <option>Number of countries  that developed a national PC training package during this period</option>
                          <option>Number of institutions/organizations provided with PC training materials, resources and equipment</option>
                          <option>Number of care providers who received  pre-service PC training</option>
                          <option>Number of care providers who successfully completed an in-service basic PC training programme</option>
                          <option>Number of care providers supported to have specialist PC skills</option>
                          <option>Number of care providers and educators supported to have PC training skills (ToT)</option>
                          <option>Number of community volunteers who successfully completed a PC training programme</option>
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

                    <div className="col-sd-12">
                      <div className="form-group">
                        <label style={{ fontWeight: "bold" }}>Remarks</label>
                        <select name="need" className="form-control" required="required" data-error="">
                          <option value="" selected disabled>--Select Remarks--</option>
                          <option>Nurses and social workers</option>
                          <option>Include community and facility-based staff</option>
                          <option>This includes 88 Palliative Care Ambassadors</option>
                        </select>
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
                          <label style={{ fontWeight: "bold" }}>Total Cummulative-5 Year Period *</label>
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
  </Container>;
};

export default Education;
