import React from 'react'

const Form = props => {
    return (
        <form onSubmit={this.getMeals}>
            <h1>Generate Meal Plan</h1>
            <label htmlFor="duration">Duration </label> <br/>
            <input type="radio" id="day" name="duration" value="day" onChange={function() {
                if (document.getElementById("day").checked) {
                    this.setState({
                        duration: "day"
                    })
                }
            }.bind(this)}/>
            <label htmlFor="day">Day </label><br/>
            <input type="radio" id="week" name="duration" value="week" onChange={function() {
                if (document.getElementById("week").checked) {
                    this.setState({
                        duration: "week"
                    })
                }
            }.bind(this)}/>
            <label htmlFor="week">Week </label><br/>
            <label htmlFor="calories">Target Daily Calories </label><br/>
            <input type="number" min="1" id="calories" onChange={function(){
                this.setState({
                    calories: document.getElementById("calories").value
                })
            }.bind(this)}/><br/>
            <label htmlFor="diet">Diet </label><br/>
            <input type="text" id="diet" placeholder="Vegetarian, Keto..." onChange={function(){
                this.setState({
                    diet: document.getElementById("diet").value
                })
            }.bind(this)}/><br/>

            <button type="submit">Get Meal Plan</button>
        </form>
    )
};

export default Form

const styles = {

};
