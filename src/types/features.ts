
import { ElementType } from "react";

export interface Feature {
  name: string;
  description: string;
  icon: ElementType;
  includedIn: {
    free: boolean | string;
    start: boolean | string;
    growth: boolean | string;
    full: boolean | string;
  };
  implementation?: string;
  scriptSnippet?: string;
}
