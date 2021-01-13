const kekos = require("./");

describe("Kekos", () => {
  test("will not invoke the callback on configuration", () => {
    const callback = jest.fn();
    kekos({ callback });

    expect(callback).not.toHaveBeenCalled();
  });

  test("will invoke the callback when permitted key code provided", () => {
    const callback = jest.fn();
    const event = { key: "Enter" };
    const onKeyDown = kekos({ callback });

    expect(callback).not.toHaveBeenCalled();

    onKeyDown(event);

    expect(callback).toHaveBeenCalledWith(event);
  });

  test("will not invoke the callback when unpermitted key code provided", () => {
    const callback = jest.fn();
    const event = { key: "Control" };
    const onKeyDown = kekos({ callback });

    onKeyDown(event);

    expect(callback).not.toHaveBeenCalled();
  });
});
