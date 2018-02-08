import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from "./Counter"

class Novo extends Component{
    render(){
        return(
            <div>
                <Counter initial={10} color="blue"/>
            </div>

        );
    }
}

export default Novo;