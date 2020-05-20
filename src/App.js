import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/Header";
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from "./components/routes/Routes";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            duration: '',
            calories: '',
            diet: ''
        }
    }

    getMeals = e => {
        e.preventDefault();
        fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=" +this.state.duration+ "&targetCalories=" +this.state.calories+ "&diet=" +this.state.diet, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "a7abd7a9cemshabd18f81b1c14e0p15c8dcjsndf63f02d30eb"
            }
        })
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(responseAsJson => {
                console.log(responseAsJson)
                let resultsSection = document.getElementById("results");
                resultsSection.innerHTML = "";
                if(this.state.duration === "week") {
                    for (let i=0; i<responseAsJson.items.length; i++){
                        let card = document.createElement("article");
                        let title = document.createElement("h2");
                        title.innerHTML = responseAsJson.items[i].value;
                        let day = document.createElement("h3");
                        day.innerHTML = "Day: " + responseAsJson.items[i].day;
                        let meal = document.createElement("h4");
                        if(responseAsJson.items[i].slot === 1) {
                            meal.innerHTML = "Breakfast"
                        } else if(responseAsJson.items[i].slot === 2) {
                            meal.innerHTML = "Lunch"
                        } else {
                            meal.innerHTML = "Dinner"
                        }

                        card.appendChild(title);
                        card.appendChild(day);
                        card.appendChild(meal);
                        resultsSection.appendChild(card)
                    }
                } else {
                    console.log(responseAsJson.meals)
                    for (let i=0; i<responseAsJson.meals.length; i++){
                        let card = document.createElement("article");
                        let title = document.createElement("h2");
                        title.innerHTML = responseAsJson.meals[i].title;
                        let prep = document.createElement("h3");
                        prep.innerHTML = "Prep time: " + responseAsJson.meals[i].readyInMinutes;
                        let serves = document.createElement("h4");
                        serves.innerHTML = "Servings: " + responseAsJson.meals[i].servings;
                        let link = document.createElement("a");
                        link.innerHTML = "View more";
                        link.href = responseAsJson.meals[i].sourceURL;

                        card.appendChild(title);
                        card.appendChild(prep);
                        card.appendChild(serves);
                        card.appendChild(link)
                        resultsSection.appendChild(card)
                    }
                }

            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className="App">
                <Header/>
                <Router>
                    <Routes
                    getMeals = {this.getMeals}
                    />
                </Router>
            </div>
        );
    }

}

export default App;
