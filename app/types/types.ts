export interface Answer {
  id: string;
  answer: string;
  exercise: string;
  resourcetype: string;
}

export interface Exercise {
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
    answers?: Answer[];
}
  
  export interface Lesson {
    id: string;
    title: string;
    order: number;
    chapter: string;
    exercises: Exercise[];
  }
  
  export interface LoaderData {
    exercise: Exercise;
    lesson: Lesson;
    exerciseIndex: number;
  }
  
  export interface MultipleChoiceProps {
    exercise: {
      id: string;
      title: string;
      description: string;
      answers: { id: string; answer: string }[];
    };
  }

  export interface NavigationButtonsProps {
    previousExerciseId: string | null;
    nextExerciseId: string | null;
    isLastExercise: boolean;
  }