import { StackProps, Stage } from "aws-cdk-lib";
import { Construct } from "constructs";
import { LoginInfraStack } from "./login-infra-stack";

export class PipelineStage extends Stage {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new LoginInfraStack(this, "SourabhPisalLoginInfraStack", {});
  }
}
