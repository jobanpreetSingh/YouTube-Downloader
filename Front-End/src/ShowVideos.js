import React, { Component } from "react";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import SearchBarwithShowVDS from "./SearchBarwithShowVDS";
export default class ShowVideos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ApiRes: this.props
        };
        console.log(this.state.ApiRes)
    }

 Best = (o) => {
        let obj = JSON.stringify(o)

        console.log('obj for download', obj)
        fetch(fetch(`http://localhost:3001/downloadvideo?quality=${obj}`).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    return alert('try again later')
                }
                console.log(data)
            })
        }))

    }


    MP4 = (a) => {
        let obj = JSON.stringify(a)

        console.log('obj for download', obj)
        fetch(fetch(`http://localhost:3001/downloadvideo?quality=${obj}`).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    return alert('try again later')
                }
                console.log(data)
            })
        }))

    }
    HD = (b) => {
        let obj = JSON.stringify(b)

        console.log('obj for download', obj)
        fetch(fetch(`http://localhost:3001/downloadvideo?quality=${obj}`).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    return alert('try again later')
                }
                console.log(data)
            })
        }))

    }
    render() {
        return (
            <div className="tmShowvideos">
                <SearchBarwithShowVDS />
                <br />
                <div class='container my-3' align='center'>

                    {this.state.ApiRes.obj.map((e, index) => {


                        return (

                            <div>
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe id={`${index}`} title="myFrame" width="560" height="315" src={`//www.youtube.com/embed/${e.id}`} allowFullScreen></iframe>
                                </div>
                                <div>
                                    <div className="mb-2" align='right'>
                                        {['up'].map((direction) => (
                                            <DropdownButton
                                                as={ButtonGroup}
                                                key={direction}
                                                id={`${index}`}
                                                drop={direction}
                                                variant="outline-success"
                                                title={` Download`}
                                            // onClick={event.target.id}
                                            >
                                                <Dropdown.Header><b>Format</b></Dropdown.Header>
                                                <Dropdown.Divider />
                                                <Dropdown.Item onClick={() => {
                                                    this.Best(
                                                        {
                                                            id: e.id,
                                                            title: e.title,
                                                            format: ['-f(bestvideo+bestaudio/best)[protocol^=http]']
                                                        })
                                                }}>Best</Dropdown.Item>
                                                <Dropdown.Item onClick={() => { this.MP4( {
                                                            id: e.id,
                                                            title: e.title,
                                                            format: [`mp4`]
                                                        }) }}>Mp4</Dropdown.Item>
                                                <Dropdown.Item onClick={() => { this.HD( {
                                                            id: e.id,
                                                            title: e.title,
                                                            format: [`-f(mp4,webm)`]
                                                        }) }} >HD</Dropdown.Item>
                                            </DropdownButton>
                                        ))}
                                    </div>
                                </div>

                                <br />
                            </div>
                        )

                    })}

                </div>

            </div >
        );
    }
}
