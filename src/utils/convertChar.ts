export const convertChar = {
    oneToUpper(val: string): string {
        return val.charAt(0).toUpperCase() + val.slice(1);
    }
}