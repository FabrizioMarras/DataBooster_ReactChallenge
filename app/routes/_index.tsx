import { Link } from "@remix-run/react";
import lessons from "~/data/lessons.json";

export default function Index() {
  // Fetch the ID of the first exercise from the first lesson
  const firstExerciseId = lessons.lessons[0].exercises[0].id;

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-custom text-center">
        <h1 className="text-title font-bold font-text mb-6">Welcome to the BADIR Framework App</h1>
        <p className="font-normal text-normal mb-8">
          Start learning the BADIR framework by clicking the button below to begin the first lesson.
        </p>
        <Link to={`/${firstExerciseId}`}>
          <button className="bg-white text-primary text-small font-bold px-6 py-3 rounded-custom transition-colors duration-100 hover:bg-secondary hover:text-white">
            Start
          </button>
        </Link>
      </div>
    </div>
  );
}
