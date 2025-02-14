import { NewUserDTO, UserDTO, UserPatchDTO } from "@/types/user.types";
import generateOpenApiSpec from "@omer-x/next-openapi-json-generator";

export async function generateSpec() {
    // Add more here
    const spec = await generateOpenApiSpec({
      UserDTO,
      NewUserDTO,
      UserPatchDTO,
    }, {
  
    });
  
    return spec;
}