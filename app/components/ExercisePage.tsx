// app/components/ExercisePage.tsx
import React from "react";
import { useLoaderData } from "@remix-run/react";
import NavigationButtons from "~/components/NavigationButtons";
import MultipleChoice from "~/components/MultipleChoice";

interface Exercise {
  id: string;
  course_id: string;
  next_exercise_id: string | null;
  previous_exercise_id: string | null;
  is_completed: boolean;
  title: string;
  order: number;
  url?: string;
  description?: string; 
  resourcetype: string;
  answers?: { id: string; answer: string; exercise: string; resourcetype: string }[];
}

interface Lesson {
  id: string;
  title: string;
  order: number;
  chapter: string;
  exercises: Exercise[];
}

interface LoaderData {
  exercise: Exercise;
  lesson: Lesson;
  exerciseIndex: number;
}

const ExercisePage: React.FC = () => {
  const { exercise, lesson, exerciseIndex } = useLoaderData<LoaderData>();
  const isLastExercise = exerciseIndex === lesson.exercises.length - 1;

  return (
    <div className="flex flex-col justify-between min-h-screen p-4 md:p-8 lg:p-12">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-custom">
          <h1 className="text-title font-bold font-text mb-6">{exercise.title}</h1>
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
