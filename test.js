const axios = require('axios');

const sendRequest = async (url, body) => {
    try {
        const response = await axios.post(url, body);
        console.log(`Status code: ${response.status}`);
        console.log(`Body: `, response.data);
    } catch (error) {
        console.error(`Error: ${error}`);
        console.error(`Error details: ${JSON.stringify(error.response.body, null, 2)}`); 
    }
};

function getRandomNumber() {
    return Math.floor(Math.random() * 100000) + 10000
}

function getRandomDocNum() {
    return  (23456789770 + Math.floor(Math.random() * 100000) + 10000).toString()
}

const runRequests = async () => {
    const url = 'https://playerapi-volcano.stage-xtreme.com/api/public/registration/Register?lang=sr-Latn-ME&v=1.1.641';

    for (let i = 0; i < 10; i++) {

        let username = 'testigrac' + getRandomNumber();
        let email = username + '@test.xyz';
        let documentNumber = getRandomDocNum();
        let body = {
            username : username,
            password : "hghbfghfghrtg",
            emailAddress: email,
            firstName: "ssadsfsd",
            lastName: "dffghjjh",
            dateOfBirth: "1990-01-01",
            documentNumber: documentNumber,
            skipTaxNumberCheck: true,
            taxNumber: null,
            gender: "M",
            genderType: 0,
            city: "Split",
            countryNumericCode: 191,
            address: "dssdfsdf 34",
            zipCode: "21000",
            phoneNumber: "385324234234",
            receiveNewsletter: true,
            acceptTermsAndConditions: true,
            acceptParticipationInActionsBonusesPrizeGames: true,
            acceptEmailSmsNotifications: true,
            clientType: "WebConsumer",
            clientId: "01f515b2-e3ec-4dc3-891d-2f87f60eed6c",
            deviceId: "252926099",
            promoInfo: null
        }

        console.log(`Sending request #${i + 1}`);
        await sendRequest(url, body);
    }
};

runRequests();