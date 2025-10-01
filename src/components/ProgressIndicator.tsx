
interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressIndicator = ({
  currentStep,
  totalSteps,
}: ProgressIndicatorProps) => {
  const progress = (currentStep / (totalSteps - 1)) * 100;

  return (
    <div className="fixed bottom-0 left-0 w-full h-1 z-50">
      <div
        className="h-full bg-brand-teal/80"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export default ProgressIndicator;
