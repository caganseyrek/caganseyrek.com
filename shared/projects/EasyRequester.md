---
title: EasyRequester
repository:
  url: https://github.com/caganseyrek/EasyRequester
  description: TypeScript-based HTTP client wrapper
---

EasyRequester is a modular HTTP client wrapper designed to be easy to use. It provides a simple, structured approach for making HTTP requests with the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with type safety, and without any dependencies.

## Key Features

- Built-in methods for handling race conditions
- Built-in debugger for detailed outputs
- Built-in TypeScript support for type safety

## Installation

EasyRequester is not available as an NPM package (at least currently).

You either can clone the repository and use it:

```bash
git clone https://github.com/caganseyrek/EasyRequester.git
cd path/to/EasyRequester
```

Or include the compiled source file from the `dist/` folder in the repository:

```plaintext
dist/
├── easy-requester.js
└── easy-requester.min.js
src/
└── ...
eslint.config.mjs
package.json
tsconfig.json
...
```

## Fundamentals

EasyRequester is designed to be initialized once in the project. After we initialize the requester, we can export it to the rest of the project.

The requester returns a base response, which can be extended by a custom interface passed to the requester when sending a request.

```typescript
...
  interface BaseResponse {
    isSuccess: boolean;
    message?: string;
  }
...
```

You can handle responses more easily with this BaseResponse. Failed responses (e.g., due to an invalid status code or error) return a BaseResponse object with `isSuccess: false`.

- The constructor of the EasyRequester instance accepts an array of 'acceptable status codes' (More on that in the [configs section](#client-config)). When a response is received without an acceptable status code, a BaseResponse object with `isSuccess: false` is returned.

- When an error occurs during the request process, a BaseResponse object with `isSuccess: false` returned. This BaseResponse object is also includes the error message if there is one.

## Usage

First create a `requester.ts` file in your project. Then we can initialize the EasyRequester in that file.

```typescript
import { EasyRequester } from "easy-requester";

const requester: EasyRequester = new EasyRequester({
  onNewRequest: "enqueue-new",
  acceptStatusCodes: [403, 404],
  isDebugMode: true,
});

export default requester;
```

This constructor accepts the configuration used across all requests. This configuration is called the Client Config, and we will explore it in more detail in the [next section](#client-config).

Then, we can import the requester instance to send requests. Below is the full config object passed to the requester:

```typescript
import requester from "./path/to/requester.ts";

const response = requester.setRequestConfig({
  url: {
    protocol: "https",
    baseUrl: "example.com/api",
    port: "3000",
    endpoint: {
      route: "auth",
      subroute: "user",
      action: "register",
    },
    query: {
      foo: "bar",
    },
  },
  method: "POST",
  header: {
    contentType: "application/json",
    responseLang: "en",
    headers: {
      // custom headers,
    },
  },
  auth: {
    accessToken: "token",
    includeCookies: true,
  },
});
```

But in most cases, a simpler config like one below should be enough:

```typescript
import requester from "./path/to/requester.ts";

const response = requester.setRequestConfig({
  url: {
    protocol: "https",
    baseUrl: "example.com/api",
    endpoint: {
      route: "auth",
      subroute: "user",
      action: "register",
    },
  },
  method: "POST",
  auth: { accessToken: "token" },
});
```

We will look into this config more detailed in the [next section](#request-config).

After setting the request config, we can send the request with the payload like this:

```typescript
import requester from "./path/to/requester.ts";

async function fetchSometing() {
  const response = await requester
    .setRequestConfig({
      ...config,
    })
    .sendRequest<TResponse, TPayload>({
      ...someDataToSend,
    });

  return response;
}
```

The generic `TPayload` represents the type of data we pass to the method, and the generic `TResponse` type extends `BaseResponse`, mentioned earlier.

## Configs

### Client Config

```typescript
type RaceConditionHandlerParams = "abort-previous" | "enqueue-new";

interface ClientConfig {
  onNewRequest?: RaceConditionHandlerParams; // defaults to "enqueue-new"
  acceptStatusCodes?: number[];
  isDebugMode?: boolean; // defaults to false
}
```

- **onNewRequest**: This property determines how to deal with race conditions. We will dive into what these 'race conditions' are in the [next section](#race-conditions).
- **acceptStatusCodes**: This property determines which status codes are expected with response. `isSuccess` is set to `true` if status code from the response is among this expected status codes. By default, the requester expect this status codes:
  ```typescript
  const POSSIBLE_STATUS_CODES: number[] = [200, 201, 202, 203, 204, 205, 206];
  ```
  The additional values we include in the **acceptStatusCodes** array are added to this list of status codes.
- **isDebugMode**: Debug mode logs the request process to the console. This property determines if the debug mode is toggled.

### Request Config

```typescript
type Methods = "GET" | "HEAD" | "OPTIONS" | "TRACE" | "PUT" | "DELETE" | "POST" | "PATCH" | "CONNECT";

type HttpProtocols = "http" | "https";

interface RequestConfig {
  url: {
    protocol?: HttpProtocols; // defaults to "http"
    baseURL: string;
    port?: number;
    endpoint: object | string;
    query?: Record<string, string>;
  };
  method: Methods;
  header?: {
    contentType?: string; // defaults to "Content-Type: application/json"
    responseLang?: string;
    headers?: Record<string, string>; // defaults to an empty object
  };
  auth?: {
    accessToken?: string | number;
    includeCookies?: boolean; // defaults to false
  };
}
```

1. **`url` section**

   - **protocol (optional)**: This is the protocol for the request and accepts `http` or `https`. It defaults to `http`.
   - **baseUrl (required)**: This is the base of the url we will send the request to. It should **not** contain protocol, port, endpoint etc. Basically it should only be the entrypoint of the server like `example.com/api`.
   - **port (optional)**: This is the port value of the url. It doesn't have a default value and is not set by default.
   - **endpoint (required)**: This is the endpoint/route that comes after the base url. It can be a simple string like `/auth/user/register`, or can be an object. If an object is passed to the property, the requester builds an endpoint using the values from the object (not the keys).

     ```typescript
       ...
       endpoint: {
         route: "auth",
         subroute: "user",
         action: "register",
       },
       ...
     ```

     In this example, the generated endpoint is `/auth/user/register`.

   * **query (optional)**: This is query that comes after the endpoint. It doesn't have a default value and is not set by default.

2. **`method` (required)**: This is the request's method like `GET`, `POST`, etc.

3. **`header` section**

   - **contentType (optional)**: This property specifies the media type of the request body. It defaults to `application/json`. Thus, specifying it explicitly is not necessary.
   - **responseLang (optional)**: This property sets the `Accept-Language` header to inform the server that we expect a response in this language. This option is mostly for servers that have a translation feature.
   - **headers (optional)**: This property is for the extra headers we want to include with the request.

4. **`auth` section**
   - **accessToken (optional)**: This property sets the `Authorization` header of the request by adding a bearer token (`Bearer <tokenValue>`). It doesn't have a default value and is not set by default.
   - **includeCookies (optional)**: This property determines whether we want to send the cookies from the browser to the server with our request. It defaults to `false`

## Race Conditions

First, let's explain what a race condition is. In context of HTTP requests, a **race condition** happens when multiple requests modify a shared data simultaneously in an unpredictable order, leading to inconsistent or unintended results.

Let's go into more details with an example. Imagine a web app where we request user profile data from the server.

1. The app sends **Request 1** to retrieve the user profile.
2. Before **Request 1** finishes and return with the data, the app sends another request (**Request 2**).
3. After that, **Request 1** is on its way back to our app.
4. Now, **Request 2** reaches the server a bit later than **Request 1** and retrieves more recent data (perhaps the user updated their profile in the meantime).
5. **Request 2** completes faster and returns to the app first. And the app updates the UI with this more recent data.
6. Then **Request 1** arrives with older data. And since it arrived last, the app updates the UI with this older data and overwrites the more recent data retrieved by **Request 2**.

And now our app has outdated information displayed even though it already received a more recent data.

### Why Do They Happen

- **Network latency**: Requests take different paths and may arrive in an unpredictible order.
- **Concurrency Issues**: The server handles the requests independently, so response times may vary.

Lastly, the client-side app does not keep track of the order of requests. It simply updates the UI with the data it receives, regardless of whether it's more recent or outdated.

### How to Deal With Race Conditions

EasyRequester has two options for dealing with these conditions:

1. **Queuing New Requests**: When we send a request and it's not completed yet, the new requests are put in a queue, and proccessed in order (FIFO) after the current requests completes.

2. **Aborting Previous Requests**: Let's say we send a request to a server and it's not completed yet. When we send another request to the server, the requester aborts the previous requests and sends the new one instead.

You can choose either option in the client config. The client config has a proprty called `onNewRequest`. This property defines how to handle race conditions. It accepts one of two possible values:

```typescript
type RaceConditionHandlerParams = "abort-previous" | "enqueue-new";
```

This property defaults to `enqueue-new`.

```typescript
import { EasyRequester } from "easy-requester";

const requester: EasyRequester = new EasyRequester({
  onNewRequest: "enqueue-new", // Defaults to "enqueue-new"
  acceptStatusCodes: [403, 404],
  isDebugMode: true,
});

export default requester;
```

## Roadmap

Below are the features I want to add to the EasyRequester.

- Interceptors
- Timeout Handling
- Request Throttling
- Request Deduplication
- Custom Middleware Support
- Retry Mechanism
- CLI Support for Sending Requests
- Automatic Token Refresh
- Plugin system (?)

## License

This project is open-source and licensed under [MIT License](https://github.com/caganseyrek/EasyRequester/blob/main/LICENSE).
