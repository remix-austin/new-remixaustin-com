import type { ZodTypeAny, z } from "zod";

const parseFormData = async <T extends ZodTypeAny>(request: Request, schema: T) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const parsedFormData = schema.parse(data) as z.infer<T>;
    return parsedFormData;
};

export { parseFormData };
