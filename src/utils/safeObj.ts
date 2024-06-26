import { CSSProperties } from "react";
import { SxProps } from "../@ui-kit/types/@types";
import { CSSObject } from "@emotion/react";

export const safeObj = <T>(p?: T | boolean) => (p || {}) as T;
export const safeCssObj = (p?: SxProps | CSSProperties | boolean) =>
  (p as SxProps) || {};

export const safeCssObjOn = (
  p?: unknown,
  onTrue?: SxProps | CSSObject,
  onFalse?: SxProps | CSSObject
) => (p ? onTrue || {} : onFalse || {});
