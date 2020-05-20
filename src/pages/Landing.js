import React, {Component} from 'react';
import Recipe from '../components/recipe/Recipe'

class Landing extends Component {
    constructor(props){
        super(props);
        this.styles = {

        };
    }
    render() {
        let recipeList  = this.props.recipes.map((element, i) => {
            return <Recipe key={i} val={element}/>
        });
        return (
            <div style={this.styles.container}>
                {recipeList}
            </div>
        );
    }
}

export default Landing;