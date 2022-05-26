import React from "react";
import '../App.css'
import SideNav from "./sidenav";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Button } from "bootstrap";
import { InputGroup } from "react-bootstrap";
import { input } from 'react-bootstrap';

export function Dashboard() {
    return (
        <section>
            <div className="maincomponent">
                <h4 style={{ marginLeft: '20px', marginTop: '20px', paddingLeft: '20px' }}>EXPENSES...</h4>
                <div className="expenses-block">
                    <form>
                        <div className="expense-name">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <InputGroup className="expenses-name">
                                        <input placeholder="Expense Name">
                                        </input></InputGroup>
                                </div>
                            </div>

                            <div className="expense-input">
                                <div class="form-group col-md-4">
                                    <label for="inputState">Total</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>R$$$</option>
                                        <option>R$$$</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>
            </div>



        </section>

    )
}

export default Dashboard;