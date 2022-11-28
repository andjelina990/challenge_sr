import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

function Overview({ event, index }) {
  return (
    <Link to={'/detail/' + index} className="col-md-12 col-lg-12 col-xlg-12">
      <div className="card card-hover">
        <div className="box bg-cyan text-center text-white">
          <p>
            Date:{moment(event.dateVenue).format('ddd')} {event.dateVenue}{' '}
          </p>
          <p>
            Time:
            {moment(event.dateVenue + ' ' + event.timeVenueUTC).format('LT')}
          </p>
          <p>
            Home Team: {event.homeTeam?.teamCountryCode}
            {event.homeTeam && event.homeTeam.name}
            <span className="ms-3">
              Goals:
              {event.homeTeam && event.awayTeam && event.result.homeGoals}
            </span>
          </p>
          <p>
            Away Team: {event.awayTeam?.teamCountryCode} {event.awayTeam?.name}
            <span className="ms-3">
              Goals:
              {event.homeTeam && event.awayTeam && event.result.awayGoals}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Overview;
