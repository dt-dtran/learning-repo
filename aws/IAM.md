# Identity Access Manager (IAM)

IAM is the primary tool for controlling and managing access to an AWS account. It allows you to specify who, which AWS resources, and permission actions.

## IAM Identity

### IAM User

IAM User represents the user or application who interacts with AWS services. IAM users are given long-term credentials for accessing AWS services. These credentials can be in the form of a username and password (for console access) or an access key and secret key (for programmatic access).

_root user is separate from IAM user, and only root user can delete an AWS account._

### IAM Role

IAM role is assumed by certain AWS Services to perform actions on your behalf, an IAM user within your account or from an external one, and users federated by identity providers that AWS trusts. Examples of these identity providers are Microsoft Active Directory, Facebook, Google, Amazon, or any IdP that is compatible with OpenID Connect (OIDC) and SAML 2.0.

Unlike IAM users, roles use time-limited security credentials for accessing AWS.

### IAM Group

IAM Group is a collection of IAM users. The policies attached to an IAM Group are inherited by the IAM users under it.

## IAM Policy

An IAM identity cannot perform AWS actions without an IAM Policy attached to it unless the resource being accessed allows the IAM Identity to do so. An IAM Policy is what authorizes an IAM user or role to control and access your AWS resources. There are three types of IAM Policies to choose from:

- AWS Managed Policies: these are built-in policies that have been constructed to conform to common use cases and job roles. For example, use the DatabaseAdministrator managed policy, which grants complete access to AWS services necessary to set up and configure AWS database services. AWS Managed Policies cannot be deleted or modified.
- Customer-managed Policy: this refers to the policies that you manually create in your account.
- Inline Policy: a policy that is embedded in an IAM Identity. Unlike AWS Managed Policies and Customer-managed Policies, an inline policy does not have its own ARN; thus, it can’t be referenced by other IAM identities. It is scoped to a specific IAM user or role.

Identity-based policies are policies you attach to an IAM Identity, such as IAM user or IAM role which defines what resources and actions the identity can access. The IAM identity is implicitly considered the principal.

Resource-based policies are attached to AWS resources, such as an S3 bucket (bucket policy), KMS key (key policy), or a Lambda function which defines who can access the resource and what actions can be done. The principle and resource must be defined. (ex bucket policy)
