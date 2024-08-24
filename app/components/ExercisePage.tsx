// app/components/ExercisePage.tsx
import React from "react";
import { useLoaderData } from "@remix-run/react";
import NavigationButtons from "~/components/NavigationButtons";
import MultipleChoice from "~/components/MultipleChoice";
import { LoaderData } from "~/types/types";
import StyledText from "~/components/styled/StyledText";

const ExercisePage: React.FC = () => {
  const { exercise, lesson, exerciseIndex } = useLoaderData<LoaderData>();
  const isLastExercise = exerciseIndex === lesson.exercises.length - 1;

  return (
    <div className="flex flex-col justify-between min-h-screen p-4 md:p-8 lg:p-12">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-custom">
          <StyledText variant="title" className="mb-6">
            {exercise.title}
          </StyledText>
          {exercise.resourcetype === "VideoExercise" && (
            <div className="mb-8">
              <div className="relative" style={{ paddingBottom: "56.25%" }}> 
                <iframe
                  src={exercise.url}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="border-none absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          )}
          {exercise.resourcetype === "MultipleChoiceExercise" && exercise.answers && (
            <div className="mb-8">
              <MultipleChoice 
                exercise={{ 
                  id: exercise.id,
                  title: "",
                  description: exercise.description || '',
                  answers: exercise.answers.map(answer => ({
                      id: answer.id,
                      answer: answer.answer
                  }))
                }} 
              />
            </div>
          )}
          <NavigationButtons
            previousExerciseId={exercise.previous_exercise_id}
            nextExerciseId={exercise.next_exercise_id}
            isLastExercise={isLastExercise} 
          />
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;
