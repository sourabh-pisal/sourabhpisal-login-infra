import { Stack, StackProps } from "aws-cdk-lib";
import { OAuthScope, UserPool, UserPoolClient } from "aws-cdk-lib/aws-cognito";
import { Construct } from "constructs";

export class LoginInfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const userPool = new UserPool(this, "user-pool", {
      selfSignUpEnabled: false,
      autoVerify: { email: false, phone: false },
      standardAttributes: {
        email: { required: true, mutable: true },
      },
    });

    new UserPoolClient(this, "user-pool-client", {
      userPool,
      authFlows: { user: true, userSrp: true },
      oAuth: {
        flows: { authorizationCodeGrant: true },
        callbackUrls: ["http://localhost:3000"],
        scopes: [OAuthScope.EMAIL, OAuthScope.OPENID],
      },
    });
  }
}
