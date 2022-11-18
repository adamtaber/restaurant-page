const menuLoad = () => {
  let contentBox = document.createElement('div');
  contentBox.id = 'content';
  let menuHeader = document.createElement('h1');
  let menuList = document.createElement('ul');
  let menuItemOne = document.createElement('li');
  let menuItemTwo = document.createElement('li');
  let menuItemThree = document.createElement('li');

  menuHeader.innerText = "Pizzeria Menu";
  menuItemOne.innerText = "Margherita Pizza";
  menuItemTwo.innerText = "Neopolitan Pizza";
  menuItemThree.innerText = "Vegan Pizza";
  
  document.body.append(contentBox);
  contentBox.append(menuHeader);
  contentBox.append(menuList);
  menuList.append(menuItemOne);
  menuList.append(menuItemTwo);
  menuList.append(menuItemThree);
}

export default menuLoad;