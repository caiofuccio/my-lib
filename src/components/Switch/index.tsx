import { Container } from './styles';

interface SwitchProps {
  isToggled: boolean;
  onToggle: () => void;
}

export function Switch({ isToggled, onToggle }: SwitchProps) {
  return (
    <Container>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="slider" />
    </Container>
  );
}
