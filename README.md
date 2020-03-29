# Base Repository for Remote Medical Treatment [RMT]  Web Application
## This is a participating project for the Covid-19 Global Hackathon
https://covid-global-hackathon.devpost.com/

## Elevator Pitch
The purpose of this application is to provide a secure, remote and passwordless communication between patients and their existing regular care doctors.  The differentiating factor of this application is that it strives to preserve the existing relationship between a doctor and patient, with the added granularity of image transmission.  Providing an image will streamline and maximize the throughput of patient care by weeding out the bottlenecks of time and complexity created by video calls and more rare cases where a person must be seen in person.  

# The Whole Story
## Inspiration
Typical regular  doctor visits are currently at a slow crawl or standstill.  Both patients and medical staff are at risk of infection for in person visits. The need to facilitate `Telemedic` care by way of web or mobile applications has thus far fallen under large care health systems, or recruited anonymous but qualified doctors.  This siphoning of patient care from doctor practices can create redundancies, bottlenecks and lack of context.  

## What it does
### Main flow:
Remote Medical Treatment[RMT] will leverage a MongoDB architecture that focuses on simplicity, scalability and performance. 

#### Stage 1: Doctor Submits Minimal Patient List

Doctor Schema = {first:<string>,last:<string>,zip:<string>,email:<string>,phone:<string>, specialty:<string>}

Patient Schema = {first:<string>,last:<string>,zip:<integer>,email:<string>,phone:<string>,doctor_id:{type:ObjectId,ref:'Doctors'}
  
#### Stage 2: Patients Notified

Utilizing Auth-0 passwordless login, [RMT]  Once authorized(existing minimal db ,first authorizes the user against an existing minimal db(of first,last,dob & email).  Once authorized to use passwordless credentials, a secure JWT encrypted password link will be sent to the user's email or cell phone, from where they can simply click on the link to be redirected to a very simple pre-populated form.  Because the patient is already known to the doctor, the more confidential patient information remains with the doctor and is simply embedded or referenced to the smaller authorization DB provided to [RMT].  Along with the already information provided at authorization there will be an additional 2 fields, one for a message to the clinical staff and another for at least one image.  Upon form submission the non-image information is sent via email to the doctor and full form payload, including the image(s) is stored in a DB.

### Sign Up Flow:
If the patient is unknown to a particular doctor that they want to see, information can be submitted and handled by office staff, at this stage, by the doctor's office.  This application has a dual purpose of bridging the gap between high risk/cautious patients that are missing out on regular appointments and preserving doctor schedules during a time when face to face visits are dramatially reduced.

### Front-End:
## Patient
### Authorization / Signup
### Form / Image Submission

## Doctor
### Telemedic Image CRM

## RMT Application
### Tracking Dashboard of Messages Sent and Care Administered

## How I built it
MERN stack
Mobile?
AWS?

## Challenges I ran into
Mobile, scalable functionality

## Accomplishments that I'm proud of
https://docs.mongodb.com/manual/core/gridfs/
## What I learned

## What's next for Remote Medical Treatment
This sample demonstrates:

- Logging in to Auth0 using Redirect Mode
- Accessing profile information that has been provided in the ID token
- Gated content. The `/profile` route is not accessible without having first logged in

## Project setup
### Configuration

The project needs to be configured with your Auth0 domain and client ID in order for the authentication flow to work.

To do this, first copy `src/auth_config.json.example` into a new file in the same folder called `src/auth_config.json`, and replace the values with your own Auth0 application credentials:

```json
{
  "domain": "{YOUR AUTH0 DOMAIN}",
  "clientId": "{YOUR AUTH0 CLIENT ID}"
}
```

### Compiles and hot-reloads for development

```bash
npm run start
```

## Deployment

### Compiles and minifies for production

```bash
npm run build
```

### Docker build

To build and run the Docker image, run `exec.sh`, or `exec.ps1` on Windows.

### Run your tests

```bash
npm run test
```

## Frequently Asked Questions

We are compiling a list of questions and answers regarding the new JavaScript SDK - if you're having issues running the sample applications, [check the FAQ](https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md)!

# What is Auth0?

Auth0 helps you to:

- Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
- Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
- Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
- Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
- Analytics of how, when and where users are logging in.
- Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](https://auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](../LICENSE) file for more info.
