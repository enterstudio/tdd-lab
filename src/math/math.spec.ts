import { expect } from "chai";
import { MathComponent } from "./math";

describe("MathComponent should", () => {
    it("sum 1 + 1 be 2", () => {
        const sut = new MathComponent();
        expect(sut.sum(1, 1)).eql(2);
    });
});
