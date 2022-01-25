import React from 'react';

export const Header = () => {
    
    const headerStyle = {
        padding: '1%',
        background: 'linear-gradient(#e66465, transparent)',
        color: 'white',
        textAlign: 'center'
    }

    return(
        <div style={headerStyle}>
            <h1>Metricell Technical Challenge</h1>
        </div>
    )
}