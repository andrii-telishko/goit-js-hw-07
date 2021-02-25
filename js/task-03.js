const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeImgListWithMarkup = ({url, alt}) => {
  return `<li>
     <img src=${url} alt=${alt} width = 450 height = 360 /> 
  </li>`;

}

const imageListRef = document.querySelector('#gallery');

const imgListMarkup = images.map(makeImgListWithMarkup).join('');
console.log(imgListMarkup);
imageListRef.insertAdjacentHTML('beforeend', imgListMarkup);

imageListRef.style.display = 'flex';
imageListRef.style.justifyContent = 'space-between';
imageListRef.style.listStyle = 'none';




