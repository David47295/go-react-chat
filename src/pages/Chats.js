import React from 'react';
import Contacts from '../components/Chats/Contacts';

class Chats extends React.Component {
    render() {
        return (
            <div id="chats">
                <Contacts />
                <div id="conversation">
                    <input type="text"></input>
                </div>
            </div>
        )
    }
}

export default Chats;