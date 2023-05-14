import React from 'react';
import { Pagination } from '../Pagination/Pagination';
import './PhonesPage.scss';

export const PhonesPage: React.FC = () => (
  <div className="phonesPage__container">
    <h1 className='phonesPage__header'>Mobile phones</h1>

    <Pagination />
  </div>
);
