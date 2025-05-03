
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import IPAddress from "./components/IPAddress";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Banner />

      <main className="p-6 space-y-6">
        <Exhibit heading="Public IP Addresses">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <IPAddress version="v4" />
            <IPAddress version="v6" />
          </div>
        </Exhibit>
      </main>
    </div>
  );
};

export default Dashboard;
