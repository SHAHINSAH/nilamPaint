const dealers = [
  "Bangalore",
  "Patna",
  "Delhi",
  "Mumbai",
];

export default function DealerLocator() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Dealer Locator
      </h1>

      {dealers.map((dealer) => (
        <div
          key={dealer}
          className="shadow p-4 mb-4 rounded"
        >
          {dealer}
        </div>
      ))}
    </div>
  );
}