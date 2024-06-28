import { PropsWithChildren } from "react";

export type TabsPanelProps = PropsWithChildren & {
  index: number;
  value: number;
};
