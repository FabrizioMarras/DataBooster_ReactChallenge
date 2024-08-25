import { Link } from "@remix-run/react";
import arrowIcon from "~/assets/icons/arrow-right.svg";
import { NavigationButtonsProps } from "~/types/types";

export default function NavigationButtons({
  previousExerciseId,
  nextExerciseId,
  isLastExercise,
}: NavigationButtonsProps) {
  return (
    <div
      className={`fixed bottom-4 left-0 right-0 flex px-4 ${
        previousExerciseId && nextExerciseId
          ? "justify-between"
          : previousExerciseId
          ? "justify-start"
          : "justify-end"
      }`}
    >
      {previousExerciseId && (
        <Link
          to={`/${previousExerciseId}`}>
          <button className="text-white p-2 rounded-custom transition-colors duration-100 hover:bg-secondary hover:text-white">
            <img src={arrowIcon} alt="Previous" className="w-icon h-icon transform rotate-180" />
          </button>
        </Link>
      )}
      {isLastExercise ? (
        <Link to="/thank-you">
          <button className="nav-btn item-interaction ">
            <img src={arrowIcon} alt="Next" className="w-icon h-icon" />
          </button>
        </Link>
      ) : (
        <Link
          to={`/${nextExerciseId}`}>
          <button className="nav-btn item-interaction ">
            <img src={arrowIcon} alt="Next" className="w-icon h-icon" />
          </button>
        </Link>
      )}
    </div>
  );
}