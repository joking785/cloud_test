import React from 'react';
import { Login, Logo, Add, Share, Stash } from '../../icons';
import { BaseInput } from '../../components/BaseComponents/BaseInput';
import './styles.css';
import { BaseButton } from '../../components/BaseButton';

export const MainPage = () => {
  return (
    <div className="MainPage_container">
      <div className="MainPage_sidebar">
        <div className="MainPage_nameTitle">
          <h2>Милохин Кирилл</h2>
          <Login />
        </div>
        <ul className="MainPage_menu">
          <li>Мои файлы</li>
          <li>Загрузить файл</li>
          <li>Общая папка</li>
        </ul>
        <div className="MainPage_historyLoading">
          <h3>История загрузок</h3>
        </div>
        <div className="MainPage_lowercontainer">
          <div className="MainPage_storageSize">
            <span>Хранилище</span>
            <div className="storageSize_bar"></div>
            <span>
              Свободно {} из {} MB
            </span>
          </div>
          <Logo />
        </div>
      </div>
      <div className="MainPage_worker">
        <BaseInput className="MainPage_search" value="" />
        <div className="worker_title">{}Мои файлы</div>
        <div className="worker_menu">
          <BaseButton className="menu_Button">
            <Add />
            Создать папку
          </BaseButton>
          <BaseButton className="menu_Button">
            <Share />
            Поделиться
          </BaseButton>
          <div className="menuButton_Stash">
            <BaseButton className="menu_Button">
              <Stash />
              Корзина
            </BaseButton>
          </div>
        </div>
        <div className="worker_WindowFile">
          <div className="WindowFile_Filterbar">
            <BaseButton className="Filterbar_button">По дате</BaseButton>
            <BaseButton className="Filterbar_button">По названию</BaseButton>
          </div>
          <div className="WindowFile_items"></div>
        </div>
      </div>
    </div>
  );
};
