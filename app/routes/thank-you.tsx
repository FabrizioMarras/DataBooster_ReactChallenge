import { Link } from "@remix-run/react";

export default function ThankYouPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-custom text-center">
        <h1 className="text-title font-bold font-text mb-6">Congratulations!</h1>
        <p className="font-normal text-normal mb-8">You have completed all the lessons in the BADIR framework.</p>
        <Link to="/" className="text-white">
        <button className="bg-white text-primary text-small font-bold px-6 py-3 rounded-custom transition-colors duration-100 hover:bg-secondary hover:text-white">
            Back to Home
          </button>
      </Link>
    </div>
  </div>
  );
}
