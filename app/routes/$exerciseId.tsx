import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import lessons from "~/data/lessons.json";
import NavigationButtons from "~/components/NavigationButtons";
import MultipleChoice from "~/components/MultipleChoice";

// Define the TypeScript interfaces for your data
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

// Loader function to fetch the correct exercise based on exerciseId
export const loader: LoaderFunction = async ({ params }) => {
  const exerciseId = params.exerciseId;

  // Loop through all lessons to find the exercise
  let foundLesson: Lesson | undefined;
  let exercise: Exercise | undefined;
  let exerciseIndex: number | undefined;

  for (const lesson of lessons.lessons) {
    exerciseIndex = lesson.exercises.findIndex((ex) => ex.id === exerciseId);
    if (exerciseIndex !== -1) {
        foundLesson = lesson;
        exercise = lesson.exercises[exerciseIndex];
        break;
      }
  }

  if (!exercise || exerciseIndex === undefined) {
    throw new Response("Exercise Not Found", { status: 404 });
  }

  // Return the found lesson and exercise
  return json({ exercise, lesson: foundLesson, exerciseIndex });
};

// Type for the data returned by the loader
interface LoaderData {
  exercise: Exercise;
  lesson: Lesson;
  exerciseIndex: number;
}

export default function ExercisePage() {
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
    }
