function innerValueToContainer(value, container) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      container[index].innerText = item;
    });
  } else {
    container.innerText = value;
  }
}

export default innerValueToContainer;
