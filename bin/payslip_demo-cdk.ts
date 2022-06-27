#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PayslipDemoCdkStack } from '../lib/payslip_demo-cdk-stack';

const app = new cdk.App();
new PayslipDemoCdkStack(app, 'PayslipDemoCdkStack');
