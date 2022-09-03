import React from 'react'
import { confirmAlert } from 'react-confirm-alert';
import {GrClose} from 'react-icons/gr'
import {ImWarning} from 'react-icons/im'
const logout = () => {
  return (<> 
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content bg-orange-100">
      <div className="modal-header">
        <h5 className="modal-title font-semibold flex text-xl  items-center" id="exampleModalLabel"><ImWarning className='mr-2 text-2xl' />Confirmation</h5>
        <button type="button" className="btn-close text-black font-bold" data-bs-dismiss="modal" aria-label="Close"><GrClose/></button>
      </div>
      <div className="modal-body font-medium text-md ">
        Are you sure to log out?
      </div>
      <div className="modal-footer">
        <button type="button" className=" font-medium btn px-3 bg-orange-200" data-bs-dismiss="modal">No</button>
        <button type="button" className="btn font-medium  bg-orange-500 ">Yes</button>
      </div>
    </div>
  </div>
</div>
    
</>
    )
}

export default logout