interface MultipleChoiceProps {
    exercise: {
      id: string;
      title: string;
      description: string;
      answers: { id: string; answer: string }[];
    };
  }
  
  const MultipleChoice: React.FC<MultipleChoiceProps> = ({ exercise }) => {
    return (
      <div>
        <h2 className="text-xl font-bold mb-2">{exercise.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: exercise.description }}></div>
        <form className="mt-4">
          {exercise.answers.map((answer) => (
            <div key={answer.id} className="mb-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name={exercise.id}
                  value={answer.id}
                  className="form-radio"
                />
                <span className="ml-2">{answer.answer}</span>
              </label>
            </div>
          ))}
        </form>
      </div>
    );
  };
  
  export default MultipleChoice;
  