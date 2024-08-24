import { Link } from "@remix-run/react";
import lessons from "~/data/lessons.json";
import StyledButton from "~/components/styled/StyledButton";
import StyledText from "~/components/styled/StyledText";

export default function Index() {
  // Fetch the ID of the first exercise from the first lesson
  const firstExerciseId = lessons.lessons[0].exercises[0].id;

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-custom text-center">
        <StyledText variant="title" className="mb-6">
          Welcome to the BADIR Framework App
        </StyledText>
        <StyledText variant="paragraph" className="mb-8">
          Start learning the BADIR framework by clicking the button below to begin the first lesson.
        </StyledText>          
        <Link to={`/${firstExerciseId}`}>
          <StyledButton isPrimary={true}>Start</StyledButton>
        </Link>
      </div>
    </div>
  );
}
