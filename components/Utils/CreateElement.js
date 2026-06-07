export const CreateElement = (
  tagName,
  {
    className = '',
    id = '',
    textContent = '',
    children = [],
    othersAttributes = {},
  }={}
)=>{
  const element = document.createElement(tagName);
  if(className) element.className = className;
  if(id) element.id = id;
  if(textContent) element.textContent = textContent;

  if(children.length > 0){
    children.forEach(child =>{
      element.appendChild(child);
    })
  }
  if(Object.keys(othersAttributes).length > 0){
    for(const key in othersAttributes){
      element.setAttribute(key, othersAttributes[key]);
    }
  }
  return element;
}