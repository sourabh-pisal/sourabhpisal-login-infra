import { Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { PipelineStack } from "../lib";

test("matches snapshot", () => {
  const stack = new Stack();
  new PipelineStack(stack, "PipelineStack", {});
  const template = Template.fromStack(stack);

  expect(template.toJSON()).toMatchSnapshot();
});
