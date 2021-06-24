export interface LoweringInstruction {
  name: string;
  latency: number;
  uops: number;
  arguments: string[];
}
