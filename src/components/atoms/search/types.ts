export type SearchProps = {
    value: string
    placeHolder: string
    keyboardType: "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "number-pad"
    | "decimal-pad"
    | "visible-password"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "name-phone-pad"
    | "twitter"
    | "web-search"
    | undefined
    onChange: (value: string) => void
}

export type SearchState = { }
