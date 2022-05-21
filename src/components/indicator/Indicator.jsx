import React from "react";
import styled from "styled-components";
import { PageSytles } from "../../styles/globalStyles";

const Container = styled.div`
  ${PageSytles}
`;

const Indicator = () => {
  return <Container>
    <div>
      <div className="container">
        <div className="row ">
          <div className=" text-center mt-5 ">
            <h1>Indicator</h1>
          </div>

          <div className="col-lg-9 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form>
                    <div className="controls">
                      <p style={{ color: "#A355AF", fontSize: "13px" }}>To develop and implement information strategy on palliative care for all levels of stakeholders.</p>
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
                          <label style={{ fontWeight: "bold" }}>Indicator</label>
                          <select name="need" className="form-control" required="required" data-error="">
                            <option value="" selected disabled>--Select Indicator--</option>
                            <option>Number of PC awareness and sensitization  meetings conducted</option>
                            <option>Number of stakeholders who acquired knowledge from the PC information and awareness raising activities</option>
                            <option>Number of new policies/policy amendments approved/ratified by BOD during this period</option>
                            <option>Number of BOD meetings held</option>
                            <option>Number of SMT meetings held</option>
                            <option>Number of Annual report produced and published</option>
                            <option>Number of Annual BOD assessments done</option>
                            <option>Number of personal development plans for BOD implemented</option>
                            <option>Number of regional and international engagements </option>
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

                      {/* <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label style={{ fontWeight: "bold" }}>Remark *</label>
                            <input type="text" name="total-sar-2015/2016" className="form-control" required="required" data-error="" />
                          </div>
                        </div>
                      </div> */}

                      <div className="col-sd-12">
                        <div className="form-group">
                          <label style={{ fontWeight: "bold" }}>Remarks</label>
                          <select name="need" className="form-control" required="required" data-error="">
                            <option value="" selected disabled>--Select Remarks--</option>
                            <option>Training journalists, hats-on, advocacy stories, community engagement, palliative care awreness, district leadership (political and health), World Cancer Day and International Childhood Cancer Day</option>
                            <option>These include policy makers, religious leaders and communities (90 Journalists and Palliative Care Service Providers)</option>
                            <option>These included Calendars, flyers, t-shirts, paper, Universal health package, documentary</option>
                            <option>Journalists training in palliative care in africa, APCA-POS and APCA C-POS workshop, scoping review of the evidence on women's groups in Uganda, Examining the value proposition of palliative care, adherence to COVID-19 preveentive guidelines and its association with intimate partner violence and depressive symptoms among women living in kamapala slums, spiritual and existencial health in terminal illness, Paediatric Cancer in Africa, Covid-19 vaccinaation for people with pre-existing conditions, grief and bereavement in palliative care, board and governance</option>
                            <option>Presentations were based case studies of patients and lived experiences of cancer patients.</option>
                          </select>
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

export default Indicator;
