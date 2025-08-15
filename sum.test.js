import sum from "./sum";

describe("sum function unit test",()=>{
    test("test 2+2 is equal to 4",()=>{
        expect(sum(2,2)).toBe(4);
    })
    test("test -2+4 is equal to 2",()=>{
        expect(sum(-2,4)).toBe(2);
    })
})
