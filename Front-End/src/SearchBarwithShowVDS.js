import React, { Component } from "react";
import { InputGroup, Button, Form } from "react-bootstrap";
import "./all.css";
import ShowVideos from './ShowVideos'
import { Link } from "react-router-dom";
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            response: {},
            isLoad: false,
        };
    }
    handlechange = (event) => {
        this.setState({ value: event.target.value });
    };
    handleForm = (e) => {
        e.preventDefault();
        const { value } = this.state;
        //const letters = /^[A-Za-z]+$/;
        const inputval = value;

        if (inputval) {
            return this.callApi();
        }
        e.target[0].className = "red";

    };
    render() {
        if (this.state.isLoad === true) {
            return (
                <div>
                    <ShowVideos obj={this.state.response} />
                    <Link to="/videos" className="fix">
                    </Link>
                </div>
            )

        }
        //     return (
        //       <div className="topMargin leftmargin ">
        //             <Form onSubmit={this.handleForm}>
        //               <InputGroup className="mb-3 " style={{ width: "60rem" }}>
        //                 <Form.Control
        //                   type="Text"
        //                   placeholder="Search"
        //                   value={this.state.value}
        //                   onChange={this.handlechange}
        //                 />
        //                 <InputGroup.Append>
        //                   <Button variant="outline-info" type="submit" >
        //                     Search
        //                   </Button>
        //                 </InputGroup.Append>
        //               </InputGroup>
        //             </Form>

        //       </div>
        //     );
        //   }

        return (
            <div className="tmShowvideos leftmargin ">
                <Form onSubmit={this.handleForm}>
                    <InputGroup className="mb-3 " style={{ width: "60rem" }}>
                        <Form.Control
                            type="Text"
                            placeholder="Search"
                            value={this.state.value}
                            onChange={this.handlechange}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-info" type="submit" >
                                Search
                  </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>

            </div>
        );
    }
    callApi = () => {
        fetch(`http://localhost:3001/Videoid?search=${this.state.value}`).then(
            (response) => {
                response.json().then((data) => {
                    if (data.error) {
                        return console.log("error occured", data.error);
                    }
                    console.log(data);
                    this.setState({ response: data, isLoad: true })

                });
            }
        );
    };

}
