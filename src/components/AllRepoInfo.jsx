import React from 'react';
import HeadTotalLinesPie from './head/HeadTotalLinesPie.jsx';
import HeadLanPie from './head/HeadLanPie.jsx';
import RepoInfoTable from './RepoInfoTable.jsx';

const AllRepoInfo = ({ data }) => {
  if (!data) return null;
  let totalLines = Object.values(data.total).reduce(
    (acc, value) => acc + value,
    0
  );
  return (
    <>
      <div className="total-pies">
        <HeadTotalLinesPie data={data} />
        <HeadLanPie languages={data.languages} totalLines={totalLines} />
      </div>
      <RepoInfoTable languages={data.languages} totalLines={totalLines} />
    </>
  );
};
export default AllRepoInfo;
