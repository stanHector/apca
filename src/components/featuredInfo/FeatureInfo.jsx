import React from 'react'
import './featuredInfo.css'


export default function FeatureInfo() {

    // console.log(user.state)
    // console.log()

    return (

        <>

            <div className='featured'>
                <div className="featuredItem" style={{ backgroundColor: "#FEF5E7" }}>
                    <span className="featuredTitle"> Indicators</span>
                    <div className="text-right" style={{ textAlign: "right", marginTop: "45px" }}>
                        <span className="featuredMoney">#</span>
                    </div>
                </div>

                <div className="featuredItem" style={{ backgroundColor: "#FAD7A0" }}>
                    <span className="featuredTitle"> Service Deliveries</span>
                    <div className="text-right" style={{ textAlign: "right", marginTop: "45px" }}>
                        <span className="featuredMoney">#</span>
                    </div>
                </div>
                <div className="featuredItem" style={{ backgroundColor: "#EDBB99" }}>
                    <span className="featuredTitle"> Policies</span>
                    <div className="text-right" style={{ textAlign: "right", marginTop: "45px" }}>
                        <span className="featuredMoney">#</span>
                    </div>
                </div>
                <div className="featuredItem" style={{ backgroundColor: "#F5B041" }}>
                    <span className="featuredTitle"> Educations</span>
                    <div className="text-right" style={{ textAlign: "right", marginTop: "45px" }}>
                        <span className="featuredMoney">#</span>
                    </div>
                </div>
                <div className="featuredItem" style={{ backgroundColor: "#F1C40F" }}>
                    <span className="featuredTitle">Medication And Technologies</span>
                    <div className="text-right" style={{ textAlign: "right", marginTop: "45px" }}>
                        <span className="featuredMoney">#</span>
                    </div>
                </div>
                <div className="featuredItem" style={{ backgroundColor: "#E59866" }}>
                    <span className="featuredTitle">A functional African palliative care research network in place</span>
                    <div className="text-right" style={{ textAlign: "right", marginTop: "45px" }}>
                        <span className="featuredMoney">#</span>
                    </div>
                </div>
            </div>
        </>
    )
}