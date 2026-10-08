export type APIResponse<T> = {
    status: "success" | "error";
    code: number;
    data?: T;
    error?: APIError[];
    message?: string;
    meta?: {};
};
 
export type APIError = {
    field?: string;
    message: string;
};