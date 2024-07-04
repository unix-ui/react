"use client";
import React from "react";
import { KbdChain_ } from "./kbd-chain.styled";
import { KbdChainProps } from "./@types";
import { Kbd } from "../Kbd/kbd.styled";

const KbdChain = ({ separatorElement, ...props }: KbdChainProps) => (
  <KbdChain_
    children={props.chain?.map((value, i, arr) => (
      <>
        <Kbd>{value}</Kbd>
        {i !== arr.length - 1 ? separatorElement : <></>}
      </>
    ))}
  />
);

export { KbdChain };
