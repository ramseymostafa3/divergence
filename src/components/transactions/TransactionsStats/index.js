import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'

function TransactionsStats() {
    const [startDate, setStartDate] = useState(new Date());
    const options = [
      { value: 'USD_JPY', label: 'USD_JPY' },
      { value: 'EUR', label: 'EUR' },
      { value: 'GBP', label: 'GBP' }
    ]
    return (
        <div className='divTransaction'>
            <div className='row align-items-center'>
                <div className='col-12 col-lg-4'>
                  <div class="fieldWrapper">
                    <label>Date</label>
                    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                  </div>
                </div>
                <div className='col-12 col-lg-4'>
                  <div class="fieldWrapper">
                    <label>Epic</label>
                    <Select className="selectBox" options={options} />
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
                  {/* <h3>LOREM IPSUM</h3> 
                  <p>IS DUMMY TEXT</p> */}
                </div>
            </div>
        </div>
    )
}

export default TransactionsStats