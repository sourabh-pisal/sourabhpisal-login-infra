import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { OAuthScope, UserPool, UserPoolClient, UserPoolDomain } from "aws-cdk-lib/aws-cognito";
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

    const userPoolClient = new UserPoolClient(this, "user-pool-client", {
      userPool,
      authFlows: { user: true, userSrp: true },
      oAuth: {
        flows: { authorizationCodeGrant: true },
        callbackUrls: ["http://localhost:3000"],
        scopes: [OAuthScope.EMAIL, OAuthScope.OPENID],
      },
    });

    const userPoolDomain = new UserPoolDomain(this, "user-pool-domain", {
      userPool,
      cognitoDomain: { domainPrefix: "login-sourabhpisal" },
    });

    new CfnOutput(this, "user-pool-id", { value: userPool.userPoolId });
    new CfnOutput(this, "user-pool-client-id", { value: userPoolClient.userPoolClientId });
    new CfnOutput(this, "user-pool-domain-name", { value: userPoolDomain.domainName });
  }
}
