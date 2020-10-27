import middy from "@middy/core";
import httpJSONBodyParser from "@middy/http-json-body-parser";
import httpEventNormalizer from "@middy/http-event-normalizer";
import httpErrorHandler from "@middy/http-error-handler";
import cors from "@middy/http-cors";

export default handler =>
  middy(handler).use([
    httpJSONBodyParser(),
    httpEventNormalizer(),
    httpErrorHandler(),
    cors(),
  ]);
