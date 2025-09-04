const windows = [];
let listener = null;

const onDocumentKeydown = ({ key }) => {
  if (key === 'Escape') {

    const lastIndex = windows.length - 1;
    if (windows[lastIndex].condition && !windows[lastIndex].condition()) {
      return;
    }
    windows[lastIndex].closeModal();
    windows.length -= 1;

    if (!windows.length) {
      document.removeEventListener('keydown', onDocumentKeydown);
      listener = null;
    }
  }
};

export const setEscapeControle = (closeModal, condition = null) => {
  windows.push({
    closeModal,
    condition
  });
  if (!listener) {
    document.addEventListener('keydown', onDocumentKeydown);
  }
};

export const removeEscapeControle = () => {
  windows.length -= 1;

  if (!windows.length) {
    document.removeEventListener('keydown', onDocumentKeydown);
    listener = null;
  }
};
