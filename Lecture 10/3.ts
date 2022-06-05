

/*

Discriminated Unions

A common technique  for working with unions is to have a single field which uses literal types which you can let TypeScript narrow down the possible current type.




*/

type HttpResponseSucess = {
    status: 200;
};

type HttpResponseBadRequest = {
    status: 400;
    reason: string;
};

type HttpResponseServerError = {
    status: 500;
    reason: string;
    error: {
        code: number;
        description: string;
    }
};

type HttpResponse = HttpResponseSucess | HttpResponseBadRequest | HttpResponseServerError;


function processResponse(response: HttpResponse): string {
    var result = "";
    if (response.status === 200) {
        result = "Success";
    }
    else if (response.status === 400) {
        result = "Bad Request - " + response.reason; // TypeScript knows that response.reason is present because of response.status === 400
    }
    else if (response.status === 500) {
        result = "Server Error - " + response.reason + " - " + response.error.description;
    }
    return result;
}

console.log(processResponse({ status: 200 }));
console.log(processResponse({ status: 400, reason: "Bad Request" }));
console.log(processResponse({ status: 500, reason: "Server Error", error: { code: 500, description: "Internal Server Error" } }));
