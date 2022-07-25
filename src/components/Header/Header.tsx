import React, { FC } from 'react'
import Top from './Top/Top';
import Button from '../../assets/UI/Button';
import Timer from '../../assets/UI/Timer';
import './Header.scss'


const Header: FC = () => {
  return (
    <header className='header container'>
      <Top />
      <div className='header-content'>
        <span>От компании слонум</span>
        <h1>Всероссийский конкурс Детского рисунка</h1>
        <p className='p2'>Учавствуйте в конкурсе и получайте призы в различных номинациях детского рисунка для всех возрастов</p>
        <div>
          <Button className='header-content-btn' content='Учавствовать' />
          <Timer/>
        </div>
      </div>
    </header>
  );
}

export default Header