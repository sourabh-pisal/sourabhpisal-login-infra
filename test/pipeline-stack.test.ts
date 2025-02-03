import { Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { PipelineStack } from "../lib";

test("matches snapshot", () => {
  const stack = new Stack();
  const pipelineStack = new PipelineStack(stack, "pipeline-stack", {});
  const template = Template.fromStack(pipelineStack);

  expect(template.toJSON()).toMatchSnapshot();
});
