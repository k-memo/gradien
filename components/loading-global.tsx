import Rive from '@rive-app/react-canvas';

export const LoadingGlobal = () => (
  <div className="loading-animation">
    <Rive src="gradient-loading.riv" stateMachines="loading" />
  </div>
);
