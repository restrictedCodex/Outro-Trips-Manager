import React  from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";

import { Nav } from "../Components/Nav";
import { Tripcount } from "../Components/Trips/Tripcount";
import { Triplist } from "../Components/Trips/Triplist";
import { Addtrip } from "../Components/Trips/Addtrip";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allTrips: [
                {
                    place: "Manali",
                    date: "2020-01-01",
                    type: "Trek"
                },
                {
                    place: "Mumbai",
                    date: "2020-04-05",
                    type: "Club"
                },
                {
                    place: "Marina",
                    date: "2020-02-09",
                    type: "Tropic"
                },
                {
                    place: "Kush Mountain",
                    date: "2020-01-01",
                    type: "Trek"
                },
                {
                    place: "Pune",
                    date: "2020-04-05",
                    type: "Club"
                },
                {
                    place: "Kokan",
                    date: "2020-02-09",
                    type: "Tropic"
                }
            ]
        }
        this.addTrip = this.addTrip.bind(this);
    }

    addTrip(newTrip) {
        this.setState((prevState) => {
            return {
                allTrips: [
                ...prevState.allTrips,
                newTrip
                ]
            }
        });
    }

    countDays(filter) {
        const { allTrips } = this.state;
        return allTrips.filter(trip => filter ? trip.type === filter : trip).length;
    }

    render () {
        return (
            <div className="app">                
                <BrowserRouter>
                    <div className="route-container">
                        <Nav />
                        <Switch>
                            <Route exact path="/" render={(props) => (
                                <Tripcount
                                    {...props}
                                    total={this.countDays()}
                                    trek={this.countDays('Trek')}
                                    tropic={this.countDays('Tropic')}
                                    club={this.countDays('Club')}
                                />
                            )}>
                            </Route>
                            <Route path="/list/:filter" render={(props) => (
                                <Triplist 
                                    {...props} 
                                    days={this.state.allTrips}
                                /> 
                            )}/>
                            <Route path="/list" render={(props) => (
                                <Triplist
                                    {...props}
                                    days={this.state.allTrips}
                                />
                            )} />
                            <Route path="/add" render={(props) => (
                                <Addtrip
                                    {...props}
                                    newTrip={this.addTrip}
                                />
                            )} />
                        </Switch>
                    </div>              
                </BrowserRouter>             
            </div>
        )
    }
}
