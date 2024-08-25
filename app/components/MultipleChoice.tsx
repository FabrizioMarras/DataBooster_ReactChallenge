import { MultipleChoiceProps } from "~/types/types";
import StyledText from "~/components/styled/StyledText";
  
  const MultipleChoice: React.FC<MultipleChoiceProps> = ({ exercise }) => {
    return (
      <>
        <div className="text-normal font-normal mb-2" dangerouslySetInnerHTML={{ __html: exercise.description }}></div>
        <form className="mt-4 pt-2 gap-3 flex flex-col">
        <StyledText variant="small" className="text-secondary mt-4">
          Pick one option
        </StyledText>
          {exercise.answers.map((answer) => (
              <label 
                key={answer.id}
                className="flex items-center gap-6 p-8 rounded-xl bg-secondary cursor-pointer answer-interaction">
                <input
                  type="radio"
                  name={exercise.id}
                  value={answer.id}
                  className="w-6 h-6 border-2 border-white/25 bg-transparent rounded-full  appearance-none flex-shrink-0 checked:bg-primary cursor-pointer"
                />
                <span className="text-small text-white">{answer.answer}</span>
              </label>
          ))}
        </form>
      </>
    );
  };
  
  export default MultipleChoice;
  