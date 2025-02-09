import Rive from '@rive-app/react-canvas';

interface LoadingGlobalProps {
  text: string;
}

export const LoadingGlobal: React.FC<LoadingGlobalProps> = ({ text }) => (
  <div className="loading-animation">
    <Rive
      src="gradient-loading.riv"
      stateMachines="loading"
      className="loading-svg"
      data-testid="loading-animation"
    />
    <span>{text}</span>
  </div>
);
