import { get } from "./get";
import { ErrorMessages } from "./errorMessages";

const OPEN_BRACKET = "{";
const CLOSE_BRACKET = "}";

const format = (path: string, object: Record<string, unknown>) => {
  // The final result of `format` function
  let result = "";
  // Check if current iteration is inside a template `{}`
  let isInsideTemplate = false;
  // Storage current string inside a template
  let currentPath = "";

  /**
   * @description Handle Errors
   * */
  const handleErrors = (chart: string) => {
    if (chart === OPEN_BRACKET && isInsideTemplate) {
      throw new Error(ErrorMessages.duplicateOpenBracket);
    } else if (chart === CLOSE_BRACKET && !isInsideTemplate) {
      throw new Error(ErrorMessages.closeBeforeOpen);
    }
  };

  path.split("").forEach(chart => {
    handleErrors(chart);

    if (chart === OPEN_BRACKET) {
      isInsideTemplate = true;
      currentPath = "";
    } else if (chart === CLOSE_BRACKET && isInsideTemplate) {
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
};

export { format };
