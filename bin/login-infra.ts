#!/usr/bin/env node
import { App, Tags } from "aws-cdk-lib";
import { PipelineStack } from "../lib";

const app = new App();
const pipelineStack = new PipelineStack(app, "sourabh-pisal-login-infra-pipeline", { env: { region: "eu-west-1" } });
Tags.of(pipelineStack).add("project", "sourabh-pisal");

app.synth();
