import React from 'react'
import Logo from '../logo/Logo'

const Header = props => {
    return (
        <header style={styles.header}>
            <Logo/>
        </header>
    )
};

export default Header

const styles = {
    header: {
        position: 'relative',
        padding: '0',
        margin: '0',
        backgroundColor: 'RGBA(180,213,178,.4)',
        width: '100%',
        height: '145px',
        alignContent: 'center',
        boxShadow: '3px 6px 8px -3px RGBA(52,48,62,.15)'
    },
    logo: {
        display: 'flex',
        flexFlow:'column',
        color: 'var(--main-color)',
        width: '25%',
        marginTop: '.5%',
        marginLeft: '1%',
        lineHeight: '2rem'
    }
};