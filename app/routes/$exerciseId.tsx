import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import lessons from "~/data/lessons.json";
import ExercisePage from "~/components/ExercisePage";

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

  return json({ exercise, lesson: foundLesson, exerciseIndex });
};

// Use the ExercisePage component in the route
export default function ExerciseRoute() {
  return <ExercisePage />;
}
