export default {
  bind(el, binding, vnode) {
    const inputEl = el.querySelector('input') || el.querySelector('textarea');
    // 添加失去焦点事件处理程序
    inputEl && inputEl.addEventListener('blur', () => {
      // 如果输入框的值发生变化，则去除首尾空格并更新输入框的值
      inputEl.value = inputEl?.value?.trim() || '';
    });
  },
  // inserted(el, binding, vnode) {
  //   el.addEventListener('blur', () => {
  //     // el.value = el.value.trim();
  //   });
  // },
};
