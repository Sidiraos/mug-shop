import cartIcon from '../assets/shopping-cart.svg';
import {useSelector , shallowEqual , useDispatch} from 'react-redux';
import React , {useCallback} from 'react';
import { createPortal } from 'react-dom';
import { isOpened } from '../features/redux/slices/cart';
import Modal from './layout/Modal';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items , shallowEqual);
  const opened = useSelector((state) => state.cart.opened , shallowEqual);

  // console.log(opened)


  const openCart = useCallback(() => {
    // console.log("i clicked cart")
    dispatch(isOpened())
  } , [opened]);

  const modal = opened && createPortal(
    <Modal onClose={openCart} />,
    document.body
  )

  return (
    <>
    <button className="fixed right-5 top-5 px-4 py-2 bg-slate-200 rounded-md flex gap-4 items-center" onClick={openCart}>
      <img src={cartIcon} alt="" className='w-6 h-6' />
      <span className="font-bold text-lg">View your cart : {items.length}</span>
    </button>
    {modal}
    </>
  )
}
export default React.memo(Cart)