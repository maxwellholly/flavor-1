import React from 'react'

const Nav = props => {
    return (
        <div>
            <p><a></a></p>
        </div>
    )
};

export default Nav

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