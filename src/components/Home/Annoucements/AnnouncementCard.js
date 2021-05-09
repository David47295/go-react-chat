import React from 'react';

class AnnouncementCard extends React.Component {
    render() {
        return (
            <div className="news-post">
                <b>{this.props.title}</b><br />
                {this.props.date}<br />
            Games: {this.props.games}
            </div>
        )
    }
}

export default AnnouncementCard;