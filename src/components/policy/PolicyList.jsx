import React from "react";
import styled from "styled-components";
import { PageSytles } from "../../styles/globalStyles";
import { AddCircleOutlineSharp } from "@material-ui/icons";

const Container = styled.div`
  ${PageSytles}
`;

export const PolicyList = () => {
    return <Container>
        <React.Fragment>
            <div>
                <div className="policy-list">
                    <div className="text-center">
                        <div style={{ marginTop: "20px" }} >
                            <span className="logs" style={{ fontWeight: "bold" }}>Policies</span>
                        </div>
                       
                    </div>
                     {/* <button className="btn btn-primary" >
                            <AddCircleOutlineSharp />
                        </button> */}
                </div>
                <div className="col-lg-12 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <table className="table table-striped table-bordered">
                            <thead style={{ textAlign: "center", fontSize: "12px" }}>
                                <tr>
                                    <th>No.</th>
                                    <th>FYPeriod</th>
                                    <th>POLICY</th>
                                    <th>OCT-DEC</th>
                                    <th>JAN-MAR</th>
                                    <th>APR-JUN</th>
                                    <th>JUL-SEP</th>
                                    <th>TOTAL</th>
                                    <th>REMARKS</th>
                                    <th>TOTAL SAR</th>
                                    <th>2015/2016</th>
                                    <th>2014/2015</th>
                                    <th>2013/2014</th>
                                    <th>2012/2011</th>
                                    <th>TOTAL CUMMULATIVE-5 YEAR</th>
                                    <th>Remarks</th>
                                    <th colSpan="3">Actions</th>
                                </tr>
                            </thead>
                            <tbody style={{ textAlign: "center", fontSize: "11px" }}>
                                {/* {assets.length === 0 ?
                            <tr align="center"><td colSpan="20">No Record Found</td></tr> :
                            data?.map((asset, index) => (
                                <tr key={asset?.id}>
                                    <td>
                                        {(recordPerPage * (currentPage - 1)) + index + 1}</td>
                                    <td>{asset.description}</td>
                                    <td>{asset.assetId}</td>
                                    <td>{asset.manufacturer}</td>
                                    <td>{asset.modelNumber}</td>
                                    <td>{asset.serialNumber}</td>
                                  
                                    <td>{asset.project}</td>
                                    <td>{asset.condition}</td>
                                    <td>{asset.states}</td>
                                    <td>{asset.facility}</td>
                                    <td>{asset.location}</td>
                                    <td>{asset.assignee}</td>
                                    <td>{asset.email}</td>
                                    <td>{asset.status}</td>
                                    <td className="text-center"><Navigate to={`/update-asset/${asset.id}`} className="edit">Edict</Navigate></td>
                                    <td className="text-center" style={{ paddingLeft: "20px" }}><i onClick={() => this.deleteAsset(asset.id)} className="fa fa-trash" style={{ color: "red" }} ><Delete /> </i></td>
                                    <td className="text-center" style={{ paddingLeft: "20px" }}><Link to={`/view-asset/${asset.id}`} className="view" style={{ alignItem: "center", color: "green" }}> <Visibility /></Link> </td>
                                </tr>
                            ))} */}
                            </tbody>
                        </table>
                        <table className="table">
                            <div style={{ float: 'left', fontFamily: 'monospace', color: '#0275d8' }}>
                                {/* Page {currentPage} of {totalPages} */}
                            </div>
                            <div style={{ float: 'right' }}>
                                <div className="clearfix"></div>
                                <nav aria-label="Page navigation example">
                                    {/* <ul className="pagination"> */}
                                    {/* <li className="page-item"><a type="button" className="page-link" disabled={currentPage === 1 ? true : false} onClick={this.showPrevPage}>Previous</a></li>
                                <li className="page-item"><a type="button" className="page-link" disabled={currentPage === 1 ? true : false} onClick={this.showFirstPage}>First</a></li>
                                <li className="page-item"><a type="button" className="page-link" disabled={currentPage === totalPages ? true : false} onClick={this.showNextPage}>Next</a></li>
                                <li className="page-item"><a type="button" className="page-link" disabled={currentPage === totalPages ? true : false} onClick={this.showLastPage}>Last</a></li> */}
                                    {/* </ul> */}
                                </nav>
                            </div>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>

    </Container>
}
