import { pluralize } from "./pluralize"

describe("pluralize", () => {
  it("should pluralize a word whose plural ends is the word + s", () => {
    expect(pluralize("cat", 0)).toEqual("cats")
    expect(pluralize("cat", 1)).toEqual("cat")
    expect(pluralize("cat", 2)).toEqual("cats")
  })
})
