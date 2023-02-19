export interface ResponseDto {
    message: string;
    isSuccess: boolean;
    errors: string[] | null;
    result: any | null;
}