import { Link } from "@remix-run/react";
import StyledButton from "~/components/styled/StyledButton";
import StyledText from "~/components/styled/StyledText";

export default function ThankYouPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-custom text-center">
        <StyledText variant="title" className="mb-6">
          Congratulations!
        </StyledText>
        <StyledText variant="paragraph" className="mb-8">
          You have completed all the lessons in the BADIR framework.
        </StyledText>
        <Link to="/">
          <StyledButton isPrimary={false}>Back to Home</StyledButton>
        </Link>
      </div>
    </div>
    );
  }
