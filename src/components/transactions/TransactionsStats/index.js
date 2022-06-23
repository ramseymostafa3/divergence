import React from 'react'

function TransactionsStats() {
    return (
        <div className='divTransaction'>
            <div className='row align-items-center'>
                <div className='col-12 col-lg-4'>
                  <div class="fieldWrapper">
                    <label>Date</label>
                    <input type='date' class='form-control' placeholder='2022' value='2022' />
                  </div>
                </div>
                <div className='col-12 col-lg-4'>
                  <div class="fieldWrapper">
                    <label>Epic</label>
                    <input type='text' class='form-control orange' placeholder='USD_JPY' value='' />
                  </div>
                </div>
                <div className='col-12 col-lg-4'>
                  <div class="fieldWrapper">
                    <label>Size</label>
                    <input type='text' class='form-control' placeholder='-150000.00' value='-150000.00' />
                  </div>
                </div>
                <div className='col-12 col-lg-4'>
                  <div class="fieldWrapper">
                    <label>Profit</label>
                    <input type='text' class='form-control green' placeholder='681.97' value='681.97' />
                  </div>
                </div>
                <div className='col-12 col-lg-4'>
                  <div class="fieldWrapper">
                    <label>Comulative</label>
                    <input type='text' class='form-control' placeholder='131722.29' value='131722.29' />
                  </div>
                </div>
                <div className='col-12 col-lg-4'>
                  <h3>LOREM IPSUM</h3> 
                  <p>IS DUMMY TEXT</p>
                </div>
            </div>
        </div>
    )
}

export default TransactionsStats