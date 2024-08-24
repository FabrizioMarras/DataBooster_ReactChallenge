import { Link } from "@remix-run/react";

// Define the props for NavigationButtons
interface NavigationButtonsProps {
  previousExerciseId: string | null;
  nextExerciseId: string | null;
}

export default function NavigationButtons({
  previousExerciseId,
  nextExerciseId,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between mt-4">
      {previousExerciseId && (
        <Link
          to={`/${previousExerciseId}`}
          className="text-blue-500 hover:underline"
        >
          <button className="flex items-center space-x-2 bg-gray-200 p-2 rounded">
            <span>← Previous</span>
          </button>
        </Link>
      )}
      {nextExerciseId && (
        <Link to={`/${nextExerciseId}`} className="text-blue-500 hover:underline">
          <button className="flex items-center space-x-2 bg-gray-200 p-2 rounded">
            <span>Next →</span>
          </button>
        </Link>
      )}
    </div>
  );
}
