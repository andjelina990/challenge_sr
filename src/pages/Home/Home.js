import React, { useContext, useState } from 'react';
import { DataContext } from '../../App';
import Overview from '../../components/Overview/Overview';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

function Home() {
  const { sportEvents } = useContext(DataContext);
  const [filteredEvent, setFilteredEvent] = useState(sportEvents);

  const renderOverview = () => {
    return filteredEvent.map((event, index) => (
      <Overview key={index} event={event} index={index} />
    ));
  };

  const filterStatus = (e) => {
    let filtered = sportEvents.filter((el) => {
      return el.status === e.target.name || e.target.name === 'all';
    });
    setFilteredEvent(filtered);
  };

  return (
    <PageWrapper>
      <div className="page-breadcrumb d-flex justify-content-between align-items-center">
        <h1>Overview</h1>
        <div className="d-flex gap-2 align-items-center">
          <span>Filter by status</span>
          <button
            className="btn btn-sm btn-warning"
            name="all"
            onClick={filterStatus}
          >
            All
          </button>
          <button
            className="btn btn-sm btn-warning"
            name="played"
            onClick={filterStatus}
          >
            Played
          </button>
          <button
            className="btn btn-sm btn-warning"
            name="scheduled"
            onClick={filterStatus}
          >
            Scheduled
          </button>
        </div>
      </div>
      <div className="row">{renderOverview()}</div>
    </PageWrapper>
  );
}

export default Home;
