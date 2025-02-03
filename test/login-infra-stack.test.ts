import { Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { LoginInfraStack } from "../lib/login-infra-stack";

test("matches snapshot", () => {
  const stack = new Stack();
  new LoginInfraStack(stack, "LoginInfraStack", {});
  const template = Template.fromStack(stack);

  expect(template.toJSON()).toMatchSnapshot();
});
