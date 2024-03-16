# demo-notes-app
sst notes app guide repo #2
https://sst.dev/chapters/adding-auth-to-our-serverless-app.html/

Create a test user

sign up user

 aws cognito-idp sign-up \
  --region us-east-1 \
  --client-id 4a67vqrvsm5a9pmlojscbugpge \
  --username admin1@example.com \
  --password Passw0rd!

verify email (administrator command)

aws cognito-idp admin-confirm-sign-up \
  --region us-east-1 \
  --user-pool-id us-east-1_n9JfAbL4E \
  --username admin1@example.com



Secure Our Serverless APIs 
https://sst.dev/chapters/secure-our-serverless-apis.html
[Mapping Cognito Identity Id and User Pool Id] (https://sst.dev/archives/mapping-cognito-identity-id-and-user-pool-id.html)

export const main = handler(async (event) => {});

To be able to hit our API endpoints securely, we need to follow these steps.

Authenticate against our User Pool and acquire a user token.
With the user token get temporary IAM credentials from our Identity Pool.
Use the IAM credentials to sign our API request with Signature Version 4.

INPUT
pnpm dlx aws-api-gateway-cli-test \
--user-pool-id='us-east-1_n9JfAbL4E' \
--app-client-id='4a67vqrvsm5a9pmlojscbugpge' \
--cognito-region='us-east-1' \
--identity-pool-id='us-east-1:4432633b-f8ca-475f-9322-57bae867f5df' \
--invoke-url='https://m1gifx0nzb.execute-api.us-east-1.amazonaws.com' \
--api-gateway-region='us-east-1' \
--username='admin1@example.com' \
--password='Passw0rd!' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'

OUTPUT
{
  status: 200,
  statusText: 'OK',
  data: {
    userId: 'us-east-1:a2f7976d-c2c6-cb00-6795-9c043abbef20',
    noteId: 'f8b38820-e3c2-11ee-909d-b1d75999ae3e',
    content: 'hello world',
    attachment: 'hello.jpg',
    createdAt: 1710613703074
  }
}









Next Page: [Setup a Stripe Account] (https://sst.dev/chapters/setup-a-stripe-account.html)
Next Page: [Handling Secrets in SST] (https://sst.dev/chapters/handling-secrets-in-sst.html)

pnpm sst secrets set STRIPE_SECRET_KEY sk_test_51Ov23HJxaO01Zx6Jdqy7byT9pYjojN2SiFq5EFEILZ7xNWVlqqUCHaBqGRjJqMWwsRqEYyAGWugZTIZNI2pptwaO00xcs1hkGW


Next Page: [Add an API to Handle Billing] (https://sst.dev/chapters/add-an-api-to-handle-billing.html)



pnpm dlx aws-api-gateway-cli-test \
--username='admin1@example.com' \
--password='Passw0rd!' \
--user-pool-id='us-east-1_n9JfAbL4E' \
--app-client-id='4a67vqrvsm5a9pmlojscbugpge' \
--cognito-region='us-east-1' \
--identity-pool-id='us-east-1:4432633b-f8ca-475f-9322-57bae867f5df' \
--invoke-url='https://m1gifx0nzb.execute-api.us-east-1.amazonaws.com' \
--api-gateway-region='us-east-1' \
--path-template='/billing' \
--method='POST' \
--body='{"source":"tok_visa","storage":21}'

Getting temporary credentials
Making API request
{ status: 200, statusText: 'OK', data: { status: true } }