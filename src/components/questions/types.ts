export const QuestionTypeConst = {
    MULTIPLE_CHOICE_RADIO: "multipleChoiceRadio",
    MULTIPLE_CHOICE_DROPDOWN: "multipleChoiceDropdown",
    FILL_IN_THE_BLANK: "fillInTheBlank",
    TRUE_OR_FALSE: "trueOrFalse",
    ESSAY: "essay"
} as const;

export type questionType = "multipleChoiceRadio" | "multipleChoiceDropdown" | "fillInTheBlank" | "trueOrFalse" | "essay" | ""