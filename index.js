// https://keycode.info/
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code

const kekos = ({
  keyCodesPermitted = ["Enter", "Space"],
  callback = () => {},
}) => (event) => {
  try {
    if (keyCodesPermitted.includes(event.code)) callback(event);
  } catch (_) {}
};

module.exports = kekos;
