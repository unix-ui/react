import { TabsPanelProps } from "./@types";

export const TabPanel = ({ index, value, children }: TabsPanelProps) => {
  return value === index ? children : <></>;
};
