import { Link } from "@remix-run/react";
import lessons from "~/data/lessons.json";

export default function Index() {
  // Fetch the ID of the first exercise from the first lesson
  const firstExerciseId = lessons.lessons[0].exercises[0].id;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the BADIR Framework App</h1>
      <p className="mb-8">
        Start learning the BADIR framework by clicking the button below to begin the first lesson.
      </p>
      <Link to={`/${firstExerciseId}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Start Lesson
        </button>
      </Link>
    </div>
  );
}
