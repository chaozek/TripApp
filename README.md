# Save trips APP

[DEMO]https://trippk.vercel.app/

### Description

This fully responsive app is connected with backend via Bearer token generated [here](https://task-devel.cleevio-vercel.vercel.app/). If you want to use your database, generate new token & include it in .env file as described in .env.sample file.

App is using must have NPM packages, the main focus was to use as least as possible packages.

Also the main focus was to be close as much possible to given Figma design.

Responsibility is done via Css Grid using Styled Components including responsive mobile header/nav, no single line of reactstrap/bootstrap...

Some JS functions had to be make to fix wrong data coming from backend such as:

- United kingdom coutry code "UK" (should be "GB")
- Wrong backend model - `street_num` is not `string` even `number` | Postman was used to get this info.

#### Tested in windows env:

- Microsoft Edge
- Firefox
- Google Chrome

**This app wasn't tested on ios devices**

### Home "/"

List of all upcoming & past trips.

### New Trip "/trip"

POST request via axios package, ADD new trip.

Very simple data validator was programmed.

### Trip Detail "/trip/:id"

Fetching data for individual trip including DELETE request.
This page wasn't styled.
