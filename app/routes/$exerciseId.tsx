import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import lessons from "~/data/lessons.json";
import ExercisePage from "~/components/ExercisePage";
import { Exercise, Lesson } from "~/types/types";

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

export default function ExerciseRoute() {
  return <ExercisePage />;
}
