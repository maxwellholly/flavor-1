import React from 'react'
import flavorgarlic from './flavorgarlic.png'

const Logo = props => {
    return (
        <div style={styles.container}>
            <img style={styles.flavor} src={flavorgarlic} alt="logo"/>
        </div>
    )
};

export default Logo

const styles = {
    container: {
        width: '100%',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    flavor: {
        width: '525px',
        margin: '0',
        padding: '0',
        marginTop: '20px'
    }
};