import defineRoute from "@omer-x/next-openapi-route-handler";
import z from "zod";
import { UserDTO } from "@/types/user.types";

export const { GET } = defineRoute({
  operationId: "getUser",
  method: "GET",
  summary: "Get a specific user by ID",
  description: "Retrieve details of a specific user by their ID",
  tags: ["Users"],
  pathParams: z.object({
    id: z.string().describe("ID of the user"),
  }),
  responses: {
    200: { description: "User details retrieved successfully", content: UserDTO },
    404: { description: "User not found" },
  },
  handleErrors: (errorType, issues) => {
    console.log(issues);
    switch (errorType) {
      case "PARSE_FORM_DATA":
        return new Response(null, { status: 400 });
      case "PARSE_REQUEST_BODY":
        return new Response(null, { status: 400 });
      case "PARSE_SEARCH_PARAMS":
        return new Response(null, { status: 400 });
      case "PARSE_PATH_PARAMS":
        return new Response(null, { status: 404 });
      case "UNNECESSARY_PATH_PARAMS":
      case "UNKNOWN_ERROR":
        return new Response(null, { status: 500 });
    }
  },
  action: async ({ pathParams }) => {
    console.log(pathParams);
    return new Response("abc", { status: 200 });
    // return Response.json({message: "Hello, World!"}, { status: 200});
  },
});

