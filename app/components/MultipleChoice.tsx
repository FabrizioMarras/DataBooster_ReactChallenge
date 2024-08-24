import { MultipleChoiceProps } from "~/types/types";
  
  const MultipleChoice: React.FC<MultipleChoiceProps> = ({ exercise }) => {
    return (
      <div>
        <h2 className="text-title font-bold mb-2">{exercise.title}</h2>
        <div className="text-normal font-normal mb-2" dangerouslySetInnerHTML={{ __html: exercise.description }}></div>
        <form className="mt-4 pt-2 gap-3 flex flex-col">
          <p className="text-small text-secondary font-small mt-4">Pick one option</p>
          {exercise.answers.map((answer) => (
              <label 
                key={answer.id}
                className="flex items-center gap-6 p-8 rounded-xl bg-secondary cursor-pointer">
                <input
                  type="radio"
                  name={exercise.id}
                  value={answer.id}
                  className="w-6 h-6 border-2 border-white/25 bg-transparent rounded-full  appearance-none checked:bg-primary flex-shrink-0"
                />
                <span className="text-small text-white">{answer.answer}</span>
              </label>
          ))}
        </form>
      </div>
    );
  };
  
  export default MultipleChoice;
  