import { ComponentProps } from "react";
import { KbdChain_ } from "./kbd-chain.styled";
import { KbdProps } from "../Kbd/@types";

export type KbdChainProps = ComponentProps<typeof KbdChain_> & {
  separatorElement?: React.ReactNode;
  chain?: (string | number)[];
  kbdProps?: KbdProps;
};
