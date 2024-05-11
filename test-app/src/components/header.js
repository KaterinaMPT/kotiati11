import React from "react";

class Header extends React.Component{
  render(){
    return(
      <header>
        <div className="div1">
            <div className="logo"></div>
            <p className="text1">Здравствуйте, это сайт с эксклюзивно отобранными мемами про самых прекрасных животных на планете - котов!</p>
            <p className="text2">Сегодня ваш разум преисполнится после просмотра этих восхитительных картинок, наслаждайтесь и не заплачьте от восторга</p>
            <a className="button" href="#te">Начать исследовать</a>
        </div>
      </header>
    )
  }
}

export default Header;
