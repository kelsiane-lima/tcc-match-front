import { ActivityProvider } from "./activities";

const Providers = ({ children }) => {
  return (
    <ActivityProvider>
      {children}
    </ActivityProvider>
  );
};
export default Providers;
