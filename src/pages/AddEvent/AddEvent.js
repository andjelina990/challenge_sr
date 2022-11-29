import React, { useContext, useState } from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { DataContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const seasons = [2022, 2023, 2024, 2025];
const statusDB = ['played', 'scheduled'];

function AddEvent() {
  const [status, setStatus] = useState(statusDB);
  const redirect = useNavigate();
  const [inputData, setInputData] = useState({
    result: {
      goals: [],
      yellowCards: [],
      secondYellowCards: [],
      directRedCards: [],
    },
  });
  const { setSportEvents } = useContext(DataContext);

  const inputHandler = (e) => {
    let copyInputData = { ...inputData };
    let inputName = e.target.name;
    let inputValue = e.target.value;

    if (inputName.includes('home_')) {
      let keyName = inputName.split('_')[1]; //  "home_officialName" ["home","officialName"]
      if (!copyInputData.hasOwnProperty('homeTeam')) {
        copyInputData.homeTeam = {};
      }
      copyInputData.homeTeam[keyName] = inputValue;
    } else if (inputName.includes('away_')) {
      let keyName = inputName.split('_')[1]; //  "away_officialName" ["away","officialName"]
      if (!copyInputData.hasOwnProperty('awayTeam')) {
        copyInputData.awayTeam = {};
      }
      copyInputData.awayTeam[keyName] = inputValue;
    } else if (inputName.includes('result_')) {
      let keyName = inputName.split('_')[1]; //  "away_officialName" ["away","officialName"]
      if (!copyInputData.hasOwnProperty('result')) {
        copyInputData.result = {};
      }
      copyInputData.result[keyName] = inputValue;
    } else {
      copyInputData[inputName] = inputValue;
    }
    setInputData(copyInputData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let copyInputData = { ...inputData };

    if (copyInputData.result.homeGoals > copyInputData.result.awayGoals) {
      copyInputData.result.winner = copyInputData.homeTeam.name;
    } else if (
      copyInputData.result.homeGoals < copyInputData.result.awayGoals
    ) {
      copyInputData.result.winner = copyInputData.awayTeam.name;
    } else {
      copyInputData.result.winner = null;
    }
    setInputData(copyInputData);
    setSportEvents((prevState) => [...prevState, copyInputData]);
    redirect('/');
  };

  return (
    <PageWrapper>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <form className="form-horizontal" onSubmit={submitHandler}>
              <div className="card-body">
                <h4 className="card-title">Add Event</h4>
                {/*season*/}
                <div className="form-group row">
                  <label
                    htmlFor="season"
                    className="col-sm-3 text-start control-label col-form-label"
                  >
                    Season
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="season"
                      id="season"
                      defaultValue={''}
                      required={true}
                      onInput={inputHandler}
                    >
                      <option disabled={true} value={''}>
                        Season
                      </option>
                      {seasons.map((el, index) => (
                        <option key={index} value={el}>
                          {el}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/*status*/}
                <div className="form-group row">
                  <label
                    htmlFor="status"
                    className="col-sm-3 text-start control-label col-form-label"
                  >
                    Status
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="status"
                      id="status"
                      onInput={inputHandler}
                      defaultValue={''}
                      required={true}
                    >
                      <option disabled={true} value={''}>
                        Status
                      </option>
                      {status.map((el, index) => (
                        <option key={index} value={el}>
                          {el}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/*time*/}
                <div className="form-group row">
                  <label
                    htmlFor="timeVenueUTC"
                    className="col-sm-3 text-start control-label col-form-label"
                  >
                    Time
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="time"
                      className="form-control"
                      id="timeVenueUTC"
                      name="timeVenueUTC"
                      onInput={inputHandler}
                    />
                  </div>
                </div>
                {/*date*/}
                <div className="form-group row">
                  <label
                    htmlFor="dateVenue"
                    className="col-sm-3 text-start control-label col-form-label"
                  >
                    Date
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="date"
                      className="form-control"
                      id="dateVenue"
                      name="dateVenue"
                      onInput={inputHandler}
                    />
                  </div>
                </div>

                <div className="row">
                  {/*HOME TEAM*/}
                  <div className="col-md-6">
                    <h5 className="text-center">Home</h5>
                    {/*name*/}
                    <div className="form-group row">
                      <label
                        htmlFor="homeName"
                        className="col-sm-3 text-start control-label col-form-label"
                      >
                        Name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="homeName"
                          name="home_name"
                          onInput={inputHandler}
                        />
                      </div>
                    </div>
                    {/*official name*/}
                    <div className="form-group row">
                      <label
                        htmlFor="homeOfficialName"
                        className="col-sm-3 text-start control-label col-form-label"
                      >
                        Official name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="homeOfficialName"
                          name="home_officialName"
                          onInput={inputHandler}
                        />
                      </div>
                    </div>
                    {/*team country code*/}
                    <div className="form-group row">
                      <label
                        htmlFor="homeTeamCountryCode"
                        className="col-sm-3 text-start control-label col-form-label"
                      >
                        Team country code
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="homeTeamCountryCode"
                          name="home_teamCountryCode"
                          onInput={inputHandler}
                        />
                      </div>
                    </div>
                    {/*goals*/}
                    <div className="form-group row">
                      <label
                        htmlFor="homeGoals"
                        className="col-sm-3 text-start control-label col-form-label"
                      >
                        Goals
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          className="form-control"
                          id="homeGoals"
                          min="0"
                          name="result_homeGoals"
                          onInput={inputHandler}
                        />
                      </div>
                    </div>
                  </div>
                  {/*AWAY TEAM*/}
                  <div className="col-md-6">
                    <h5 className="text-center">Away</h5>
                    {/*name*/}
                    <div className="form-group row">
                      <label
                        htmlFor="awayName"
                        className="col-sm-3 text-start control-label col-form-label"
                      >
                        name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="awayName"
                          name="away_name"
                          onInput={inputHandler}
                        />
                      </div>
                    </div>

                    {/*official name*/}
                    <div className="form-group row">
                      <label
                        htmlFor="awayOfficialName"
                        className="col-sm-3 text-start control-label col-form-label"
                      >
                        Official name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="awayOfficialName"
                          name="away_officialName"
                          onInput={inputHandler}
                        />
                      </div>
                    </div>
                    {/*team country code*/}
                    <div className="form-group row">
                      <label
                        htmlFor="awayTeamCountryCode"
                        className="col-sm-3 text-start control-label col-form-label"
                      >
                        Team country code
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="awayTeamCountryCode"
                          name="away_teamCountryCode"
                          onInput={inputHandler}
                        />
                      </div>
                    </div>
                    {/*goals*/}
                    <div className="form-group row">
                      <label
                        htmlFor="awayGoals"
                        className="col-sm-3 text-start control-label col-form-label"
                      >
                        {' '}
                        Goals
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          className="form-control"
                          id="awayGoals"
                          min="0"
                          name="result_awayGoals"
                          onInput={inputHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-top">
                <div className="card-body">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default AddEvent;
