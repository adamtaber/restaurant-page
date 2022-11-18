const contactPage = () => {
  let contentBox = document.createElement('div');
  contentBox.id = 'content';
  let contactHeader = document.createElement('h1');
  let contactName = document.createElement('p');
  let contactPhone = document.createElement('p');
  let contactEmail = document.createElement('p');

  contactHeader.innerText = "Contact Us!";
  contactName.innerText = "John Smith";
  contactPhone.innerText = "111-111-1111";
  contactEmail.innerText = "john@example.com";
  
  document.body.append(contentBox);
  contentBox.append(contactHeader);
  contentBox.append(contactName);
  contentBox.append(contactPhone);
  contentBox.append(contactEmail);
  
}

export default contactPage;