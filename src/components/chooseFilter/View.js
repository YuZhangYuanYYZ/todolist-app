import React from 'react';
import './style.css'

class Filter extends React.Component {

    butonAllHandler() {

        this.props.onAllClick();
    }
    buttonActiveHandler() {
        this.props.onActiveClick();
    }
    buttonCompletedHandler() {
        this.props.onCompletedClick();
    }



    render() {
        return (
            <div className='filterButtonsContainer'>
                <button className="filterButton buttonAll" onClick={() => this.butonAllHandler()} >ALL</button>
                <button className="filterButton buttonActive" onClick={() => this.buttonActiveHandler()} >ACTIVE</button>
                <button className="filterButton buttonCompleted" onClick={() => this.buttonCompletedHandler()} >COMPLETED</button>
            </div>
        )
    }

}

export default Filter