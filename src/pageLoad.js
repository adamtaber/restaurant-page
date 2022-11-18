const pageLoad = () => {
  let contentBox = document.createElement('div');
  contentBox.id = 'content';
  let header = document.createElement('h1');
  let pizzaImage = document.createElement('img');
  let description = document.createElement('p');

  header.innerText = "Adam's Pizzeria";
  description.innerText = "The best margherita pizza west of the atlantic."
  pizzaImage.src = "./pizza.jpg";

  document.body.append(contentBox);
  contentBox.append(header);
  contentBox.append(pizzaImage);
  contentBox.append(description);
}

export default pageLoad;