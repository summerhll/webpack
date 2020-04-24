import './style.css';
import Icon from './logo.png';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');
    element.innerHTML = 'hello world'
    element.classList.add('hello');
    // 将图像添加到我们已经存在的 div 中。
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log(Data);

    return element;
}

document.body.appendChild(component());