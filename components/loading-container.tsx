import Rive from '@rive-app/react-canvas';

export const LoadingContainer: React.FC = () => (
  <div className="loading-container">
    <Rive
      src="gradient-loading.riv"
      stateMachines="loading"
      className="loading-svg"
      data-testid="loading-animation"
    />
  </div>
);
