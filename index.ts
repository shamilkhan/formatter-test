import { get } from "./utils/get";

enum ErrorMessages {
    /**
     * @description Don't Forget to close 
     * @example "{"
     * */
    noCloseBracket = "There is no close curly bracket after open one in string template",
    /**
     * @description Don't duplicate Opening Curly Bracket
     * @example "{{"
     * */
    duplicateOpenBracket = "Don't duplicate open curly bracket",
    /**
     * @description Don't duplicate Opening Curly Bracket
     * @example "}"
     * */
    closeBeforeOpen = "Close Before Open",
};

const openBracket = "{";
const closeBracket = "}";

const format = (path: string, object: unknown) => {
    // Final Result
    let result = "";
    // Check if current iteration is inside template `{}`
    let isInsideTemplate = false;
    // Current string inside template
    let currentPath = "";

    path.split("").forEach(chart => {

        if (chart === openBracket && isInsideTemplate) {
            throw new Error(ErrorMessages.duplicateOpenBracket);
        }

        if (chart === closeBracket && !isInsideTemplate) {
            throw new Error(ErrorMessages.closeBeforeOpen);
        }

        if (chart === openBracket) {
            isInsideTemplate = true;
            currentPath = "";
        } else if (chart === closeBracket && isInsideTemplate) {
            isInsideTemplate = false;
            result += get(object, currentPath);
            currentPath = "";
        } else if (isInsideTemplate) {
            currentPath += chart;
        } else {
            result += chart;
        }
    });

    return result;
}

export { format, ErrorMessages };