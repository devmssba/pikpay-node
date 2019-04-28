# PikPay NodeJS Wrapper

![img](https://mss.ba/npm/banners/pikpay001.jpg)

Wrapper for PikPay payment gateway

### Prerequisites

You have to have access to test  [PikPay gateway](https://ipg.pikpay.ba/) .


## Getting Started

```

const pikpay = require("@mss.ba/pikpay-node");

const _AUTHENTICITY_TOKEN = process.env.AUTHENTICITY_TOKEN || "YOUR TOKEN FROM PIKPAY";
const _API_AUTH_KEY = process.env.API_AUTH_KEY || "YOUR API TOKEN FROM PIKPAY"";
const _API_ACTION_URL = process.env.API_ACTION_URL || "API URL FROM PIKPAY";



const transaction = {
    "ch-full-name" : "John Doe",
    "ch-address": "Elm Street 22",
    "ch-city" : "Mostar",
    "ch-zip": 22000,
    "ch-country": "Bosnia and Herzegovina",
    "ch-phone": "38761854123",
    "ch-email": "a@live.com",
    "pan": 4341000000000000,
    "cvv": 000,
    "expiration_date": "000",
    "order-info": "tandara-2222",
    "order-number": "test001",
    "amount": 54301,
    "currency": "BAM",
    "ip": "127.0.0.1",
    "language": "hr",
    "transaction-type": "purchase",
    "authenticity-token" : _AUTHENTICITY_TOKEN,
    "digest": pikpay.generateDigest({
        "api-auth-key": _API_AUTH_KEY,
        "order-number": "test001",
        "amount": 54301,
        "currency": "BAM"
    })
   }


void (async function(){ 

    const response = await pikpay.asyncCreateTransaction(transaction,_API_ACTION_URL);
    console.log(response);
})();


```
There are two response codes 

* code 1
* code 2

If you get Code2, that means that you need to activate 3D security for Visa credit cards

Create listener on your side fetch PaRes and MD and activate function

```
const finish3Dsecurity = await pikpay.asyncFinish3DTransaction(_API_PARES_URL, PaRes, MD);

	const statusInt = finish3Dsecurity.status ? 1 : 0;
    const { errors, data } = finish3Dsecurity;

    if (errors.length > 0) {
       console.log(errors.join());
    }


```

## Available functions

* generateDigest (Creating Digest which is required by PikPay)
* makeid(Simple number order generator),
* asyncCreateTransaction,
* asyncFinish3DTransaction

```
const digest = generateDigest({

   "api-auth-key": _API_AUTH_KEY,
    "order-number": "test001",
    "amount": 54301,
    "currency": "BAM"

});

console.log(digest);

```

### Prerequisites

Just install it

### Installing


Run command 

```
npm i @mss.ba/pikpay-node
```

## Running the tests

There are not test's at the moment

### Future vision for project

Standardized code style
Tests
Make better outputs
Remove doubled xml generators

## Built With packages

* Crypto
* Axios
* xml-js
* js2xmlparser

## Contributing

We love contributors, send us PR and we will make it come merged to our lovely wrapper

## Versioning

TBD but we are thinking to use use [SemVer](http://semver.org/) for versioning.

## Authors

* **Armin Comic** - *Initial work* - [MedoDome](https://github.com/MedoDome) - [MSS](https://www.mss.ba/)

See also the list of TBM

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
