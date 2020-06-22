const get = (from, ...selectors) =>
  [...selectors].map((s) =>
    s
      .replace(/\[([^\[\]]*)\]/g, ".$1.")
      .split(".")
      .filter((t) => t !== "")
      .reduce((prev, cur) => prev && prev[cur], from)
  );

const obj = {
  selectors: { to: { val: "val to select" } },
  target: [1, 2, { a: "test" }],
  a: {
    b: {
        b2: [ 12, 23, 34]
    },
    c: {
        d: true,
    }
  }
};

console.log(
  "result: ",
  get(obj, "selectors.to.val", "target[0]", "target[2].a")
);

console.log(
    "result: ",
    get(obj, "a.b", "a.b.b2[1]", "a.c.d")
  );
