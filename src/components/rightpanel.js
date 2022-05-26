import React from "react";
import { Nav } from 'react-bootstrap';
import '../App.css'
import { InputGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export function RightPanel() {
    return (
        <div className="rightpanel">
            <div className="save-block">
                <h3 className="save-area-font">SAVE :</h3>
                <div class="form-row" >
                    <div class="form-group col-md-6">
                        <InputGroup className="savers-name">
                            <input placeholder="Name" className="savers-name">
                            </input></InputGroup>
                        <div className="saving-amount">
                            <InputGroup className="savers-name">
                                <input placeholder="$" className="savers-name">
                                </input></InputGroup>
                        </div>
                    </div>
                </div>
                <hr className="horisontal-line"></hr>
                <p className="total-saved">Total Saved :</p>  <InputGroup className="total-saved-group">
                    <input placeholder="$" className="total-saved-input">
                    </input></InputGroup>
            </div>
        </div>

    )
}
export default RightPanel;