import Feedback from "./Feedback/Feedback";

const INITIAL_STATE = {
    good: 0,
    neutral: 0,
    bad: 0
}

export const App = () => {
  return (
    <>
      <Feedback state={INITIAL_STATE} />
    </>
  );
};
