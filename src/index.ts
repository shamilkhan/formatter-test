import { get } from "./get";
import { ErrorMessages } from './errorMessages';

const openBracket = "{";
const closeBracket = "}";

const format = (path: string, object: Record<string, unknown>) => {
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

export { format };
