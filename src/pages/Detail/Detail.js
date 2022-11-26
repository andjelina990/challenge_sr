import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../App';
import { useParams } from 'react-router-dom';

// import "./detail.scss"

function Detail() {
  const { id } = useParams();
  const { sportEvents } = useContext(DataContext);
  const [haveDetails, setHaveDetails] = useState(false);

  useEffect(() => {
    if (
      sportEvents[id].homeTeam === null ||
      sportEvents[id].awayTeam === null
    ) {
      setHaveDetails(false);
    } else {
      setHaveDetails(true);
    }
  }, [id, haveDetails, sportEvents]);

  const checkWinner = (team) => {
    if (team === 'home') {
      return sportEvents[id].result.winner === sportEvents[id].homeTeam.name;
    } else if (team === 'away') {
      return sportEvents[id].result.winner === sportEvents[id].awayTeam.name;
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="page-breadcrumb pb-3">
          <h2>
            Details{' '}
            <span className="float-end text-muted">
              Season: {sportEvents[id].season}
            </span>
          </h2>
        </div>
        {haveDetails ? (
          <div className="row">
            <div className="col-md-6 border border-1">
              <div
                className={`alert ${
                  checkWinner('home') ? 'alert-success' : 'alert-danger'
                }`}
                role="alert"
              >
                <h4 className="alert-heading">Home</h4>
                <h3 className="text-center">
                  {sportEvents[id].homeTeam.officialName}
                </h3>
                <h2 className="text-center">
                  {sportEvents[id].result.homeGoals}
                </h2>
                <hr />
              </div>
            </div>
            <div className="col-md-6 border border-1">
              <div
                className={`alert ${
                  checkWinner('away') ? 'alert-success' : 'alert-danger'
                }`}
                role="alert"
              >
                <h4 className="alert-heading">Away</h4>
                <h3 className="text-center">
                  {sportEvents[id].awayTeam.officialName}
                </h3>
                <h2 className="text-center">
                  {sportEvents[id].result.awayGoals}
                </h2>
                <hr />
              </div>
            </div>
            <div className="col-md-12">
              <div className="alert alert-info" role="alert">
                <div className="row">
                  <div className="col-md-3">
                    <p>Golas:</p>
                    <ul>
                      {sportEvents[id].result.goals.map((goal, index) => (
                        <li key={index}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <p>Yellow Cards:</p>
                    <ul>
                      {sportEvents[id].result.yellowCards.map((card, index) => (
                        <li key={index}>{card}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <p>Seccond Yellow Cards:</p>
                    <ul>
                      {sportEvents[id].result.secondYellowCards.map(
                        (card, index) => (
                          <li key={index}>{card}</li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <p>Direct Red Cards:</p>
                    <ul>
                      {sportEvents[id].result.directRedCards.map(
                        (card, index) => (
                          <li key={index}>{card}</li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h2 className="alert alert-danger">Only exist one team!</h2>
        )}
      </div>
    </div>
  );
}

export default Detail;
