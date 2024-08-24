import { Link } from "@remix-run/react";

export default function ThankYouPage() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Congratulations!</h1>
      <p className="mb-8">You have completed all the lessons in the BADIR framework.</p>
      <Link to="/" className="text-white">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
