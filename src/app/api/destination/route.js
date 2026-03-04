export async function GET() {
  const destinations = [
    { id: 1, name: "Kashmir", country: "India" },
    { id: 2, name: "Paris", country: "France" },
    { id: 3, name: "Bali", country: "Indonesia" },
    { id: 4, name: "Maldives", country: "Maldives" }
  ];

  return Response.json(destinations);
}