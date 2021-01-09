import React from 'react'
import Fade from 'react-reveal/Fade';
import data from '../data/data.json'

function MeetingDetails() {
  return (
        <footer className="footer">
            <Fade bottom cascade>
                <div className="footer__wrapper">
                    {data.Meeting.map((meeting, i) => {
                        return ( 
                            <div key={i}>
                                {meeting.roles.map(function (role, i) { 
                                    return (
                                        <div key={i} className="meeting__detail">
                                            <span>{role.id}. {role.location}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        );
                    })}
                </div>
                <div className="copy-right">
                    <span>Designed by <a href="https://cargocollective.com/namsai" target="_blank" rel="noopener noreferrer">Namsai Supavong</a> &
                    Build by <a href="http://khawoat6.github.io/" target="_blank" rel="noopener noreferrer">Oat Phattaraphon</a></span>
                </div>
            </Fade>
        </footer>
    )
}
export default MeetingDetails