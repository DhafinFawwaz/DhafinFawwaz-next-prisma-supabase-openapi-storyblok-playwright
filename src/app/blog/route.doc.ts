import defineRoute from "@omer-x/next-openapi-route-handler";
import z from "zod";

export const { GET } = defineRoute({
    operationId: "getBlogPage",
    method: "GET",
    summary: "Get a specific blog by ID",
    description: "Retrieve details of a specific blog by their ID",
    tags: ["Blogs"],
    queryParams: z.object({
      id: z.string().describe("ID of the blog"),
    }),
    responses: {
      200: { 
        description: "Blog details retrieved successfully aa",
        content: "<html>Blog Page</html>",
      },
      404: { description: "Blog not found" },
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
    action: async ( _param ) => new Response(),
  });
