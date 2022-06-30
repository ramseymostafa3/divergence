import React from "react";
import Company01 from 'assets/media/company01.png';
import Company02 from 'assets/media/company02.png';
import Company03 from 'assets/media/company03.png';
import Company04 from 'assets/media/company04.png';
import Company05 from 'assets/media/company05.png';
import Company06 from 'assets/media/company06.png';
import Company07 from 'assets/media/company07.png';

function SummaryCompanies() {
  return (
    <div className="row rowDivergent">
      <div className="col-12">
        <div class="blockDivergent">
          <div class="rowCompany">
            <div class="colCompany">
              <img src={Company01} alt="" />
            </div>
            <div class="colCompany">
              <img src={Company02} alt="" />
            </div>
            <div class="colCompany">
              <img src={Company03} alt="" />
            </div>
            <div class="colCompany">
              <img src={Company04} alt="" />
            </div>
            <div class="colCompany">
              <img src={Company05} alt="" />
            </div>
            <div class="colCompany">
              <img src={Company06} alt="" />
            </div>
            <div class="colCompany">
              <img src={Company07} alt="" />
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}  
export default SummaryCompanies;