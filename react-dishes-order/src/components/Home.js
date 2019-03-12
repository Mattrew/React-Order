import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import Header from './Header';
import SplitBar from './SplitBar';
import Content from './Content';
import breakfastImg from '../img/breakfast.jpg';
import lunchImg from '../img/lunch.jpg';
import dinnerImg from '../img/dinner.jpg';
import milkImg from '../img/milk.jpg';
import coffeeImg from '../img/coffee.jpg';
import colaImg from '../img/cola.jpg';
import riceImg from '../img/rice.jpg';
import noodlesImg from '../img/noodles.jpg';
import hamburgerImg from '../img/hamburger.jpg';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Header row">
                    <div className="col-md-4">
                        <Header name="Breakfast" imgSrc={breakfastImg} />
                    </div>
                    <div className="col-md-4">
                        <Header name="Lunch" imgSrc={lunchImg} />
                    </div>
                    <div className="col-md-4">
                        <Header name="Dinner" imgSrc={dinnerImg} />
                    </div>
                </div>
                <SplitBar />
                <div className="Content">
                    <p>Drink</p>
                    <div className="Content-Layout row">
                        <div className="col-md-4">
                            <Content name="Milk" imgSrc={milkImg} dishNo="001"></Content>
                        </div>
                        <div className="col-md-4">
                            <Content name="Coffee" imgSrc={coffeeImg} dishNo="002"></Content>
                        </div>
                        <div className="col-md-4">
                            <Content name="Cola" imgSrc={colaImg} dishNo="003"></Content>
                        </div>
                    </div>
                </div>
                <SplitBar />
                <div className="Content">
                    <p>Staple Food</p>
                    <div className="Content-Layout row">
                        <div className="col-md-4">
                            <Content name="Rice" imgSrc={riceImg} dishNo="004"></Content>
                        </div>
                        <div className="col-md-4">
                            <Content name="Noodles" imgSrc={noodlesImg} dishNo="005"></Content>
                        </div>
                        <div className="col-md-4">
                            <Content name="Hamburger" imgSrc={hamburgerImg} dishNo="006"></Content>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
