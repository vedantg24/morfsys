import React from 'react';
import Card from 'react-bootstrap/Card';

const Dashboard = () => {
    return (
        <div className="dbox">
            <div className="sidenav">
                <img src="/logo.svg" alt="" className="dlogo" width="113px" height="25px" />
                <div className="home">
                    <span className="shome">Home</span>
                </div>
                <li className="nav">My Pilots</li>
                <li className="nav">Inbox</li>
                <li className="nav">My Team</li>
                <hr className="line" />
                <div className="team">Add Team Members</div>
                <div className="name">Patricia M.</div>
                <div className="desig">Teacher</div>
                <div className="name">Justin S.</div>
                <div className="desig">Teacher</div>
                <div className="name">Paul Literi</div>
                <div className="desig">Counselor</div>
                <hr className="setline" />
                <div className="setting">Setting</div>
                <div className="signout">Sign Out</div>
            </div>
            <div className="dashheader">
                <div className="shen">Shenzhen Houde Academy</div>
                <div className="tab">
                    <span className="discover">discover</span>
                    <span className="impactb">impact board</span>
                    <span className="learningp">Learning pods</span>
                    <hr className="impactbline" />

                </div>
                <div className="dcontent">
                    <div className="group12">
                        <div className="group10">
                            <div className="impactc">Imapct Campaign</div>
                            <Card className="card" >
                                <Card.Body >
                                    <Card.Title className="cardtitle">Reading Comprehension</Card.Title>
                                    <Card.Text className="cardtext">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="card" >
                                <Card.Body >
                                    <Card.Title className="cardtitle">Career Development</Card.Title>
                                    <Card.Text className="cardtext">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="groupfooter">
                            <div className="snc">Start New Campaign</div>
                        </div>
                    </div>
                    <div className="group12">
                        <div className="group10">
                            <div className="impactc">Learning Tools</div>
                            <Card className="card2" >
                                <Card.Body >
                                    <Card.Title className="cardtitle">Paragon One</Card.Title>
                                    <Card.Text className="cardtext">
                                        Creative Thinking
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="card2" >
                                <Card.Body >
                                    <Card.Title className="cardtitle">Classcraft</Card.Title>
                                    <Card.Text className="cardtext">
                                        Writing Composition
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="card2" >
                                <Card.Body >
                                    <Card.Title className="cardtitle">Read To Me</Card.Title>
                                    <Card.Text className="cardtext">
                                        Experimental Learning
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="card2" >
                                <Card.Body >
                                    <Card.Title className="cardtitle">Discovery Education</Card.Title>
                                    <Card.Text className="cardtext">
                                        Creative Thinking
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="groupfooter">
                            <div className="snc">Add New Tool</div>
                        </div>
                    </div>
                    <div className="group12">
                        <div className="group10">
                            <div className="impactc">Tool Pilots</div>
                            <Card className="card3" >
                                <Card.Body >
                                    <Card.Title className="cardtitle">ReadToMe: Houde Pilot 1</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card className="card4" >
                                <Card.Body >
                                    <Card.Title className="cardtitle">Paragon One: Houde Pilot 2</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card className="card4" >
                                <Card.Body >
                                    <Card.Title className="cardtitle">Paragon One: Houde Pilot 2</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="group12">
                        <div className="group10">
                            <div className="designl">Design Learning Pods</div>
                            <Card className="card5" >
                                <div className="groupfooter">
                                    <div className="snc">New Learning Pod</div>
                                </div>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
