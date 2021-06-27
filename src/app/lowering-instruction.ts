export interface LoweringInstruction {
  name: string;
  latency: number;
  uops: number;
  throughput: number;
  arguments: string[];
}
