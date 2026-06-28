export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-5 mt-8">
        <div className="shadow p-6 rounded">
          Products: 120
        </div>

        <div className="shadow p-6 rounded">
          Orders: 45
        </div>

        <div className="shadow p-6 rounded">
          Dealers: 30
        </div>

        <div className="shadow p-6 rounded">
          Revenue: ₹2,50,000
        </div>
      </div>
    </div>
  );
}