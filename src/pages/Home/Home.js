import React, { useContext } from 'react';
import { DataContext } from '../../App';
import Overview from '../../components/Overview/Overview';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

function Home() {
  const { sportEvents } = useContext(DataContext);

  const renderOverview = () => {
    return sportEvents.map((event, index) => (
      <Overview key={index} event={event} index={index} />
    ));
  };

  return (
    <PageWrapper>
      <div className="py-5">
        <h1>Overview</h1>
      </div>
      <div className="row">{renderOverview()}</div>
    </PageWrapper>
  );
}

export default Home;
