import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

class CommonForm extends React.Component {
    render() {
        return (
    <div class="window">
    <div class="workSpace">
        <InputForm />
        <TaskList />
        <Footer />
    <div class="decor">
        <div class="decor__inside">
            </div>
    </div>
    <div class="decor2">
        <div class="decor__inside2">
        </div>
        </div>
    </div>
    </div>
        );
    }
}
export default {CommonForm};