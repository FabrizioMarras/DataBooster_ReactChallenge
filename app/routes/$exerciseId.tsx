import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import lessons from "~/data/lessons.json";

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
  const lesson: Lesson = lessons.lessons[0]; // Assuming one lesson for simplicity

  const exercise = lesson.exercises.find((ex) => ex.id === exerciseId);

  if (!exercise) {
    throw new Response("Exercise Not Found", { status: 404 });
  }

  return json({ exercise, lesson });
};

// Type for the data returned by the loader
interface LoaderData {
  exercise: Exercise;
}

export default function ExercisePage() {
  // Use the data returned by the loader
  const { exercise } = useLoaderData<LoaderData>();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{exercise.title}</h1>
      {exercise.resourcetype === "VideoExercise" ? (
        <div>
          <iframe
            src={exercise.url}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-64"
          ></iframe>
        </div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: exercise.description || '' }}></div>
      )}
      {/* Additional navigation buttons or features can be added here */}
    </div>
  );
}
