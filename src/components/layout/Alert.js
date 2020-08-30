import React from 'react'

const Alert = (props) => {

        if (props.alertBool === true){
            return (
                <div className = {`alert alert-${props.alertType}`}>
                <i className = 'fas fa-info-circle' />{props.alertMsg} 
            </div>
            );
        } else {
            return <p></p>
        }
};

export default Alert;
