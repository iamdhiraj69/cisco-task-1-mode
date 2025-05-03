
const Exhibit = ({ heading, children }) => {
  return (
    <section className="bg-slate-800 text-white p-6 rounded-xl shadow-md border border-slate-700">
      <h2 className="text-xl font-semibold mb-4">{heading}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
};

export default Exhibit;
