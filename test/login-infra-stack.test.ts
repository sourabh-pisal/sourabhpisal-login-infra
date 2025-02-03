import { Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { LoginInfraStack } from "../lib/login-infra-stack";

test("matches snapshot", () => {
  const stack = new Stack();
  const loginInfraStack = new LoginInfraStack(stack, "login-infra", {});
  const template = Template.fromStack(loginInfraStack);

  expect(template.toJSON()).toMatchSnapshot();
});
