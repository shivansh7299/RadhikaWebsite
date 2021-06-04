import React, { Component } from 'react'
import Header from '../header/HeaderComponent'
import FoodComponent from '../food/FoodComponent'
import BarComponent from '../bar/BarComponent'
import SnacksComponent from '../snacks/SnacksComponent'
import RoomComponent from '../room/RoomComponent'
import HomeComponent from '../home/HomeComponent'
import { Switch, Route, Redirect} from "react-router-dom";


export default class MainComponent extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header/>
                    <Switch>
                        <Route path="/home" component={HomeComponent}/>
                        <Route path="/food" component={FoodComponent} />
                        <Route path="/bar" component={BarComponent} />
                        <Route path="/snacks" component={SnacksComponent} />
                        <Route path="/room" component={RoomComponent}/>
                        <Redirect to="/home"/>
                    </Switch>
                </header>
            </div>
        )
    }
}
