// https://keycode.info/
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code

const kekos = ({ keys = ["Enter", " "], callback = () => {} }) => (event) => {
  try {
    if (keys.includes(event.key)) callback(event);
  } catch (_) {}
};

module.exports = kekos;
