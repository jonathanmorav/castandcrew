
interface NavigationArrowProps {
  onClick: () => void;
  className?: string;
}

// Disabled: render nothing to remove the down arrow overlay across slides
const NavigationArrow = (_props: NavigationArrowProps) => {
  return null;
};

export default NavigationArrow;
