import type { Request, Response } from "express";

type APISuccessResponse<T> = {
    status: "success";
    data?: T;
    message?: string;
    meta?: {};
};
type APIErrorResponse = {
    status: "error";
    error: APIError[];
    message?: string;
};

export type APIResponse<T> = APISuccessResponse<T> | APIErrorResponse;


export type APIError = {
    field?: string;
    message: string;
};


export type ExpressHandler<
    TBody = unknown,
    TResponse = unknown,
    TParams = {},
    TQuery = {}
> = (
    req: Request<TParams, TResponse, TBody, TQuery>,
    res: Response<TResponse>
) => Promise<void>;


export enum StatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  ERROR = 500,
};

export const Messages = {
  SUCCESS: 'Success',
  CREATED: 'Resource created',
  UPDATED: 'Resource updated',
  DELETED: 'Resource deleted',
  BAD_REQUEST: 'Bad request',
  UNAUTHORIZED: 'Unauthorized',
  FORBIDDEN: 'Forbidden',
  NOT_FOUND: 'Not found',
  INTERNAL_ERROR: 'Internal server error',
  USER_ALREADY_EXISTS: 'User already exists',
  USER_NOT_FOUND: 'User not found',
  INVALID_CREDENTIALS: 'Invalid email or password',
  VALIDATION_ERROR: 'Validation error',
};
