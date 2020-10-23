import middy from "@middy/core";
import httpJSONBodyParser from "@middy/http-json-body-parser";
import httpEventNormalizer from "@middy/http-event-normalizer";
import httpErrorHandler from "@middy/http-error-handler";

export default handler => middy(handler)
    .use([
        httpJSONBodyParser(),
        httpEventNormalizer(),
        httpErrorHandler()
    ]);