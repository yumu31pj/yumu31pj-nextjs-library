'use client';

import { useEffect, useState } from "react";
import styles from './Pagination.module.scss';
import { PaginationType } from "./PaginationType";

const Pagination = (props: PaginationType) => {
  const { totalCount, url, postsPerPage, pageNumber } = props;
  const pageNum = Math.ceil(totalCount / postsPerPage);
  const pageList = Array.from({ length: pageNum }, (_, index) => index + 1);
  const displayedListLength = 5;
  const fixedDisplayListNum = displayedListLength - 2
  const pageNextMark = '>';
  const pagePrevMark = '<';
  
  const initShadowIndex = () => {
    let initShadowIndex = Number(pageNumber) - 1 || 0;
    if (Number(pageNumber) - 1 <= fixedDisplayListNum) {
      initShadowIndex = fixedDisplayListNum - 1;
    } else if (Number(pageNumber) + fixedDisplayListNum >= pageList.length) {
      initShadowIndex = pageList.length - fixedDisplayListNum;
    } else {
      initShadowIndex = Number(pageNumber) - 1 || 0;
    }
    return initShadowIndex;
  }
  
  const [shadowListIndex, setShadowListIndex] = useState(initShadowIndex());
  const [displayedList, setDisplayedList] = useState<Array<number | string>>(pageList);

  useEffect(() => {
    updateDisplayedList();
  }, [shadowListIndex]);

  const updateDisplayedList = () => {
    if(shadowListIndex < displayedList.length - 1 && shadowListIndex + 3 <= displayedListLength) {
      setDisplayedList([...pageList.slice(0, displayedListLength - 2), pageNextMark, pageList[pageList.length - 1]]);
    } else if (shadowListIndex + 2 >= pageList.length - 1) {
      setDisplayedList([...pageList.slice(0,1), pagePrevMark, ...pageList.slice(-3)]);
    } else {
      setDisplayedList([...pageList.slice(0,1), pagePrevMark, ...pageList.slice(shadowListIndex, shadowListIndex + 3),pageNextMark, pageList[pageList.length - 1]]);
    }
  }

  const movePage = (increment: number) => () => {
    setShadowListIndex(shadowListIndex + increment);
    updateDisplayedList();
  };

  return (
    <>
      <ul className={styles['pagination']}>
        {displayedList.map((data, key:number) => (
          data == pageNumber ? (
            <li key={key} className={`${styles['pagination__item']} ${styles['pagination__item--active']}`}>
              <span>{data}</span>
            </li>
            ): 
          data == pageNextMark ?(
            <li key={key} className={`${styles['pagination__item']} ${styles['pagination__item--next']}`}>
              <span className={styles['page-next']} onClick={movePage(1)}>{data}</span>
            </li>
          ): 
          data == pagePrevMark ? (
            <li key={key} className={`${styles['pagination__item']} ${styles['pagination__item--prev']}`}>
              <span className={styles['page-prev']} onClick={movePage(-1)}>{data}</span>
            </li>
          ) : (
            <li key={key}  className={styles['pagination__item']}>
              <a href={`${url}?page=${data}`}>
                <span onClick={movePage(1)}>{data}</span></a>
            </li>
          ))
        )}
      </ul>
      <div className={styles['pagination-counter']}>{pageNumber}/{pageNum}</div>
    </>
  );

}

export default Pagination;