module.exports = function(dim) {
  const create_line = (dim) => (_, index) => {
    return Array.apply(null, new Array(dim))
      .map((_, ii) => (ii == index || dim - ii -1 == index) ? "X" : " ")
    ;
  };

  return Array.apply(null, new Array(dim))
    .map(create_line(dim))
    .map((item) => item.join(""))
    .join("\n") + "\n"
  ;
}
