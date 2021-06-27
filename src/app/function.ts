import { Parameter } from "./parameter";

export interface Function {
  name: string;
  "return": string;
  params?: Parameter[];
  alias?: string[];
}
