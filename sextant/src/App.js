
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Banner />

      <main className="p-6 space-y-6">
        <Exhibit heading="Network Information">
 
        </Exhibit>

        <Exhibit heading="Future Metrics">
          <p>Bandwidth: Coming soon...</p>
        </Exhibit>
      </main>
    </div>
  );
};

export default Dashboard;
