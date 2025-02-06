import { Outlet } from 'react-router-dom';

const PersistLayout = () => {
  return (
    <div>
      <Outlet /> {/* This keeps rendered pages in memory */}
    </div>
  );
};

export default PersistLayout;
