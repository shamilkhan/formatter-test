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
}

export { ErrorMessages };
