/**
 * REQUIRED NPM MODULES 
 */

const crypto = require('crypto'); // For making SHA1 digest
const axios = require('axios'); // For making requests
const convert = require('xml-js');
const jstoxml = require("js2xmlparser");
const responseCodes = require("./responseCodes");

/**
 * GLOBAR VARS 
 */


const HEADERS = {
    'Accept'       : 'application/xml',
    'Content-Type' : 'application/xml; charset=UTF8'
}
/**
 * DEMO FUNCTIONS
 */

function makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


/**
 * FUNCTIONS
 */


function validateTransactionParams(transaction) {

    /**
     * Validating function which is WIP state
     * @TODO 
     * 1. Make these check valid and test it 
     * @NEXT
     * 1. Make configuration array for required fields ??? 
     *  
     */
    // "ch-full-name" : "John Doe",
    // "ch-address": "Elm Street 22",
    // "ch-city" : "Mostar",
    // "ch-zip": 22000,
    // "ch-country": "Bosnia and Herzegovina",
    // "ch-phone": "38761854123",
    // "ch-email": "a@live.com",
    // "pan": 4341792000000044,
    // "cvv": 373,
    // "expiration_date": "1912",
    // "order-info": "tandara-2222",
    // "order-number": "a3dsec4",
    // "amount": 54301,
    // "currency": "BAM",
    // "ip": "127.0.0.1",
    // "language": "hr",
    // "transaction-type": "purchase",
    // "authenticity-token" : _AUTHENTICITY_TOKEN,
    // "digest": "digest"

    let validationErrors = [];
    if(transaction["ch-full-name"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["ch-address"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["ch-city"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["ch-zip"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["ch-country"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["ch-phone"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["ch-email"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["pan"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["ccv"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["expiration_date"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["order-info"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["order-number"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["amount"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["currency"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["ip"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["language"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["transaction-type"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["authenticity-token"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(transaction["digest"].trim().length === 0){
        validationErrors.push({ valid: false, msg: "Card Holder name is not valid" });
    }
    if(validationErrors.length > 0)
        return false;
    return true;
}

function generateDigest(input) {
    /**
     * Digest is required by PikPay
     * It's SHA1 hash of API AUTH KEY, order number, amount and currency
     */

    var shaReady = input["api-auth-key"] + input["order-number"] + input["amount"] + input["currency"];
    return crypto.createHash('sha1').update(shaReady).digest('hex')
}

function transactionResponseJSONPretty(transaction){
    let object = {};
    for (var key in transaction) {
        object[key] = transaction[key]["_text"];
    }
    return object;
}
function generateXML(root, transaction) {
  /**
   * This will be recoded again
   * Only one module should be used for XML
   */

   const xml = jstoxml.parse(root, transaction, {
    declaration: { encoding: "UTF-8" }
  });
  console.log(xml);
  return  xml;
}


async function asyncFinish3DTransaction(url, PaRes, MD) {
    console.log("==== INCOMING ====");
    console.log(PaRes,MD);
    console.log("=== DEMO ===");
    const threeDObject = {
        "PaRes": PaRes,
        "MD": MD
    }

 
    try {
        const threeXMLObject = generateXML("secure-message", threeDObject);
        console.log(threeXMLObject);

        const response = await axios.post(url, threeXMLObject, {
            headers: HEADERS
        })
    
        result1 = convert.xml2js(response.data, { compact: true, spaces: 4 });
        

       if (response.status === 201) {
                const { transaction, 'secure-message': secure } = result1;
    
                if (typeof transaction !== "undefined") {
                    if (typeof responseCodes[transaction["response-code"]["_text"]] !== "undefined") {
                        if (responseCodes[transaction["response-code"]["_text"]]['msg'] === "Approved") {
                            return { status: true, errors: [], msg: "Success", responseData: response.data,  data: transactionResponseJSONPretty(transaction), code: 1 };
                        } else {
                            return { status: false, errors: [responseCodes[transaction["response-code"]["_text"]]['msg']], data: null, msg: "Failed", responseData: response.data, code: 0 };
                        }
                    }
                }
            }
    } catch (error) {
        // handle error
        console.log(error);
        const { response } = error;
        // We haven't get error here
        if (typeof response === "undefined") {
            console.log(error);
            return { status: false, errors: ['Server error'], data: null, responseData: null, code: 0 };
        } else {
            return { status: false, errors: [response.data], data: null, responseData: response.data, code: 0 };

        }
    }
  
}
async function asyncCreateTransaction(orginalTransaction, url) {
    /**
     * RUN Validations
     */
    if (!url) {
        return { status: false, errors: ["Url not provided"], msg: "Failed", responseData: null, code: null };
    }
    // if (!validateTransactionParams(orginalTransaction))
    //     return; // FIX THIS
    try {
        const response = await axios.post(url, generateXML("transaction", orginalTransaction), {
            headers: HEADERS
        });
        result1 = convert.xml2js(response.data, { compact: true, spaces: 4 });
        // console.log(result1);
        if (response.status === 201) {
            const { transaction, 'secure-message': secure } = result1;
            const sendResult = transactionResponseJSONPretty(transaction);
            if (typeof transaction !== "undefined") {
                if (typeof responseCodes[transaction["response-code"]["_text"]] !== "undefined") {
                    // This can be one line 
                    if (responseCodes[transaction["response-code"]["_text"]]['msg'] === "Approved") {
                        return { status: true, errors: null, msg: "Success", responseData: response.data, code: 1 , data: sendResult};
                    } else {
                        return { status: false, errors: [responseCodes[transaction["response-code"]["_text"]]['msg']], msg: "Failed", responseData: response.data, code: 0 , data: sendResult};
                    }
                }
            }
            if (typeof secure !== "undefined") {

                /**
                 *  Here we need to send request for 3D Secure 
                *   
                */

                // Test function
                // return await asyncFinish3DTransaction(secure['acs-url']['_text'],secure['pareq']['_text'],secure['authenticity-token']['_text']);


                return { status: false, errors: null, msg: "Verification required", responseData: secure, data: { url: secure['acs-url']['_text'], pareq: secure['pareq']['_text'], authenticity_token: secure['authenticity-token']['_text'] }, code: 2 };



            }

        }

    } catch (error) {
        const { response } = error;
        if (typeof response === "undefined") {
            console.log(error);
            return { status: false, errors: ['Server error'], data: null, responseData: null };
        }
        if(response.data === "Invalid request"){
            return { status: false, errors: ['Invalid request'], data: null, responseData: null };

        }
        const resultData = convert.xml2js(response.data, { compact: true, spaces: 4 });

        let responseErrors = [];
        if (response.status === 422) {
            const { error: errors } = resultData.errors;
            if (Array.isArray(errors)) {
                errors.forEach(err => {
                    responseErrors.push(err["_text"]);
                });
            } else {
                responseErrors.push(errors["_text"]);
            }

        } else if (response.status === 406) {
            return { status: false, errors: response.data, msg: "Failed", data: null, responseData: resultData, code: 0 };
        }
        return { status: false, errors: responseErrors, msg: "Failed", data: null, responseData: resultData, code: 0 };
    }
}

function getCodeInfo(code){
    return typeof responseCodes[code] !== "undefined" ? responseCodes[code] : { msg : "Code not found"};
}

module.exports = {
    generateDigest,
    makeid,
    asyncCreateTransaction,
    asyncFinish3DTransaction,
    getCodeInfo
}
// createTransaction(validNon3DSecured);
// (createTransaction(validNon3DSecured));