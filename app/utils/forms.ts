import type { ZodTypeAny, z } from "zod";

const parseFormData = async <T extends ZodTypeAny>(request: Request, schema: T) => {
    const formData = await request.formData();

    const parsedFormData = schema.parse(formData) as z.infer<T>;
    return parsedFormData;
};

export { parseFormData };
